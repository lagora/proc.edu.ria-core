export const adjustSurfaceFromHeight = {
    1000: scale => ({ direction, height, int }) => {
        let distance = scale;
        if (height === 0) {
            distance = 0;
        } else if (height > scale) {
            distance = scale * 0.75;
        } else if (height < scale) {
            distance = scale * 0.9;
        }
        const width = distance;
        const depth = distance;
        return ({ width, depth });
    },
}

export default { adjustSurfaceFromHeight };
