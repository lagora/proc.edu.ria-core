import volume from './core';
import elevation from './elevation';
import spiral from './spiral';
import grid from './grid';
import utils from './utils';
import { hash } from 'spark-md5';
// import { v4 } from 'uuid';

// export const init = () => hash(v4());
export const init = () => hash('proceduria');

export const scales = [
    1000,
    100,
    10,
];

export const methods = { grid, spiral };

export const map = ({ hash }) => scale => length => {
    const adjustedHash = utils.cycleHashUntilMaxFirst(hash)();
    return methods.spiral(scale)(length)
        .map(a => ({ ...a, hex: utils.getHexAt(adjustedHash)(a.i) }) )
        .map(a => ({ ...a, int: parseInt(a.hex, 16) }))
        .map(a => elevation.adjustYfromHeight(scale)(({
            ...a,
            ...elevation.height[scale]({ length, scale })(a),
            meta: {
                type: 'volume',
                scale,
                lod: 0,
            }
        })) );
};

export const core = { grid, init, map, spiral, scales, volume, utils };

export default core;
