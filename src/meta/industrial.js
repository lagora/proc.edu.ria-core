import { roundAndTrim } from '../utils';

export const sectorMapping = [
    { type: 'quinary' },
    { type: 'quarternary' },
    { type: 'tertiary' },
    { type: 'secondary' },
    { type: 'primary' },
];

export const industrySector = ({ i, length }) => {
    const percent = roundAndTrim(i / Math.pow(length, 2))(10);
    let sector = sectorMapping[4];
    if (i === 0) {
        sector = sectorMapping[0];
    } else if (percent <= 0.075) {
        sector = sectorMapping[1];
    } else if (percent <= 0.5) {
        sector = sectorMapping[2];
    } else if (percent <= 0.8) {
        sector = sectorMapping[3];
    }
    return sector;
};


export default { industrySector };