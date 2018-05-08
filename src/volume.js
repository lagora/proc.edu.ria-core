export const volume1000 = hash => ({ min, max }) => {

};

export const volume = hash => ({ min, max }) => {
    1000: volume1000(hash)({ min, max }),
};

export default volume;
