import utils from './utils';

export const adjustYfromHeight = scale => ({ y, height }) =>
    (height === 0 ? scale : height) / 2;

export const height = {
    1000: ({ length, scale }) => ({ hex, int, i }) => {
        let height = int;
        let max = i === 0 ? 0 : Math.ceil(i / length);
        max = max === 0 ? 1 : max;
        return utils.roundAndTrim(((height / max) / ( i === 0 ? 1.25 : 2)) * scale)(1);
    },
    100: ({ length, scale }) => ({ hex, int, i }) => {
    },
    1: ({ scale }) => ({ hex }) => parseInt(hex, 16) * scale,
};

export default { adjustYfromHeight, height };