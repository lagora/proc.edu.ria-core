export const nextPositions = {
    n: scale => a => ({ ...a, z: a.z - scale }),
    e: scale => a => ({ ...a, x: a.x + scale }),
    s: scale => a => ({ ...a, z: a.z + scale }),
    w: scale => a => ({ ...a, x: a.x - scale }),
};

export const getNextPosition = scale => a => direction =>
    ({ ...nextPositions[direction](scale)(a), direction });

export const matchPosition = a => b =>
    ['x', 'z'].every(axis => a[axis] === b[axis]);

export const isBlocked = previous => a =>
    previous.some(matchPosition(a));

export const copyPosition = a => b =>
    ({ ...a, x: b.x, z: b.z });

export const getLastFromPrevious = previous =>
    previous[previous.length - 1];

export const getLastPosition = previous => current =>
    previous.length === 0 ? current : getLastFromPrevious(previous);

