import industrial from './industrial';

export const lodMappingByScale = {
    1000: 0,
    100: 0,
    10: 1,
    1: 0.1,
};

export const meta = ({ hash, i, length, scale }) => {
    const type = 'volume';
    const lod = lodMappingByScale[scale];
    const sector = industrial.industrySector({ i, length, scale });
    return { type, sector };
};

export default meta;