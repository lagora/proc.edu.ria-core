export const grid = scale => length =>
    Array(length)
        .fill({ x: 0, y: 0, z: 0 })
        .map((a, i) => ({ ...a, x: i * scale }))
        .reduce((a, b) => a.concat(
            Array(length)
                .fill({...b})
                .map((a, i) => ({ ...a, z: i * scale}))
        ), [])
        .map((a, i) => ({ ...a, i }));

export default grid;
