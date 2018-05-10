import { directions, getNextDirection } from './direction';
import { getLastPosition, getNextPosition, isBlocked } from './position';

export const makeSpiral = scale => (previous, current, i, list) => {
    current = i === 0 ? current : getLastPosition(previous)(current);
    const { direction } = current;
    const alternatePosition = getNextPosition(scale)(current)(i === 0 ? direction : getNextDirection(direction)(directions));
    const blocked = i === 0 ? false : isBlocked(previous)(alternatePosition);
    return previous.concat(blocked ? getNextPosition(scale)(current)(direction) : alternatePosition);
};

export const path = scale => length =>
    Array(Math.pow(length, 2))
        .fill({ x: 0, y: 0, z: 0, direction: 'n' })
        .reduce(makeSpiral(scale), [])
        .map((a, i) => (({ ...a, i })) );

export default path;
