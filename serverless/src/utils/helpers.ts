import { TGenericObj } from '../global/type';

export const removeEmptyFieldFromObj = (obj: TGenericObj) => {
    const newObj: any = {};
    Object.keys(obj).forEach((key) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
        else if (obj[key] !== undefined) newObj[key] = obj[key];
    });
    return newObj;
};

export const isEmptyKeyPresent = (obj: TGenericObj) => {
    Object.keys(obj).find((key) => obj[key]);
};

export const convertItemsToStandard = (items: any) => {
    return items?.map((item: any) => {
        const obj: any = {};
        Object.keys(item).map((key) => {
            obj[key] = item[key].S;
        });
        return obj;
    });
};
