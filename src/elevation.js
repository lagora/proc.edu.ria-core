export const adjustYfromHeight = scale => data =>
    ({ ...data, y: ( data.height === 0 ? scale : data.height) / 2 });

export const height = {
    1000: scale => hex => ({ height: parseInt(hex, 16) * scale }),
    1: scale => hex => {
        const int = parseInt(hex, 16);
        let height = int;
        // if (int > 0 && int < 5) {
        //     height = height / 3;
        // }
        // if (int >= 5 && int < 12) {
        //     height = height / 2;
        // }
        // if ([0, 15].includes(int)) {
        //     height /= 3;
        // }
        if (int < 15) {
            height /= 2;
        }
        // const height = int > 9 ? int / 2 : int;
        return ({ height: height * scale });
    },
};

export default { adjustYfromHeight, height };