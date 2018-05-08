export const cycleHashUntilMaxFirst = hash => (index = 0) => {
    const position = hash.indexOf('f');
    if (position < 0) {
        return `f${hash.substr(1)}`;
    }
    return `${hash.substr(position)}${hash.substr(0, position -1)}`;
};

export const diviveMaxStartingFrom = hash => index => divider =>
    hash.substr(0, index)
        .concat(
            hash.substr(index).split('').map(hex => (parseInt(hex, 16) / (divider || 2)).toString(16) ).join('')
        );

export const getHexAt = hash => index =>
    index < hash.length ? hash[index] : hash[index % hash.length];

export const xyzToString = ({ x, y, z }) =>
    `${x} ${y} ${z}`;

export default { cycleHashUntilMaxFirst, diviveMaxStartingFrom, getHexAt, xyzToString };
