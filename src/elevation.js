export const adjustYfromHeight = scale => data =>
    ({ ...data, y: ( data.height === 0 ? scale : data.height) / 2 });

export const height = {
    1000: ({ length, scale }) => ({ hex, int, i }) => {
        let height = int;
        let max = i === 0 ? 0 : Math.ceil(i / length);
        max = max === 0 ? 1 : max;
        height = (height / max) / ( i === 0 ? 1.25 : 2);
        // height = Math.round(height * 10) / 10;
        return ({ height: height * scale });
    },
    100: ({ length, scale }) => ({ hex, int, i }) => {
        let height = int;
        let max = i === 0 ? 0 : Math.ceil(i / length);
        max = max === 0 ? 1 : max;
        height = (height / max) / ( i === 0 ? 1.25 : 2);
        height = Math.round(height * 10) / 10;
        return ({ height: height * scale });
    },
    1: ({ scale }) => ({ hex }) => ({ height: parseInt(hex, 16) * scale }),
};

export default { adjustYfromHeight, height };