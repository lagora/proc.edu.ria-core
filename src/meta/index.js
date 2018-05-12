import industrial from './industrial';

export const lodMappingByScale = {
    1000: 0,
    100: 1,
    10: 2,
    1: 3,
};

export const meta = ({ hash, i, length, scale }) => {
    const type = 'volume';
    const lod = lodMappingByScale[scale];
    const sector = industrial.industrySector({ i, length, scale });
    return { lod, sector, type };
};

export default meta;