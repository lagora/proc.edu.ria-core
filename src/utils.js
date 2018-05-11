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

export const extractXYZ = ({ x, y, z }) =>
    ({ x, y, z });

export const getHexAt = hash => index =>
    index < hash.length ? hash[index] : hash[index % hash.length];

export const pathFromPosition = data =>
    data.map((each, i) => {
        const current = extractXYZ(each);
        const rawNext = i === data.length - 1 ? data[0] : data[i + 1];
        const next = extractXYZ(rawNext);
        return [{ ...current, y: current.y + (each.height / 2) + 1}, {...next, y: next.y + (rawNext.height / 2) + 1 }];
    });

export const roundAndTrim = value => after =>
    Math.round(value * Math.pow(after, 2)) / Math.pow(after, 2);

export const xyzToString = ({ x, y, z }) =>
    `${x} ${y} ${z}`;

export default { cycleHashUntilMaxFirst, diviveMaxStartingFrom, getHexAt, pathFromPosition, roundAndTrim, xyzToString };
