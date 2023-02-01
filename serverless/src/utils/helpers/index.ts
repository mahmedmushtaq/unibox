import { TGenericObj } from '../../global/types';

export const removeEmptyFieldFromObj = (obj: TGenericObj) => {
    const newObj: TGenericObj = {};
    Object.keys(obj).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        if (obj[key] === Object(obj[key])) newObj[key] = removeEmptyFieldFromObj(obj[key]);
        else if (obj[key] !== undefined) newObj[key] = obj[key];
    });
    return newObj;
};

export const isEmptyKeyPresent = (obj: TGenericObj) => {
    Object.keys(obj).find((key) => obj[key]);
};
