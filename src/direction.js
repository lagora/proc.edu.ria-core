export const directions = ['n', 'e', 's', 'w'];

export const getNextDirection = direction => (directions) => {
    const index = directions.indexOf(direction);
    return  directions[index + 1 > directions.length - 1 ? 0 : index + 1];
};

export default { directions, getNextDirection };