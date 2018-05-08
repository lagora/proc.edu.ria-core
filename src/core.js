import volume from './core';
import elevation from './elevation';
import path from './path';
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

export const methods = { grid, path };

export const map = ({ hash, method }) => scale => length => {
    const adjustedHash = method === 'grid' ? hash : utils.cycleHashUntilMaxFirst(hash)();
    return methods[method](scale)(length)
        .map(a => ({ ...a, hex: utils.getHexAt(adjustedHash)(a.i) }) )
        .map(a => elevation.adjustYfromHeight(scale)(({
            ...a,
            ...elevation.height[scale](scale)(a.hex)
        })) );
}

export const core = { grid, init, map, path, scales, volume, utils };

export default core;
