import { CANINE, COLOR_MAPPING, CROWN, INSISOR, MOLAR, PRE_MOLAR, PULP, ROOT } from './constants.js';

const getToothId = (toothLabel) => {
    const toothId = toothLabel.split("-")[0];
    return +toothId;
}

const getToothPart = (toothLabel) => {
    const toothPart = toothLabel.split("-")[1];
    return +toothPart;
}

const getToothType = (toothId) => {
    const index = toothId % 10;
    if (index <= 2) {
        return INSISOR;
    } else if (index === 3) {
        return CANINE;
    } else if (index >= 6) {
        return MOLAR;
    }
    return PRE_MOLAR;
}

const isToothUpper = (toothId) => toothId < 30;

const getToothPartName = (toothLabel) => {
    const toothPart = getToothPart(toothLabel);
    const toothId = getToothId(toothLabel);
    if (toothPart === 1) {
        return CROWN;
    } else if (toothPart === 2 ||
        (getToothType(toothId) === MOLAR && toothPart < 4) ||
        (getToothType(toothId) === MOLAR && isToothUpper(toothId) && toothPart === 4)) {
        return ROOT;
    } else {
        return PULP;
    }
}

export const getColor = (toothLabel) => {
    const partName = getToothPartName(toothLabel);
    return COLOR_MAPPING[partName];
}
