import {
  GridOn as GridOnIcon,
  AttachMoneyOutlined as AttachMoneyOutlinedIcon,
  WatchLaterOutlined as WatchLaterOutlinedIcon,
  SchoolOutlined as SchoolOutlinedIcon,
  LocationOnOutlined as LocationOnOutlinedIcon,
  ForestOutlined as ForestOutlinedIcon,
} from "@mui/icons-material";

export const featuresList = [
  {
    id: 1,
    text: "Daily updates about open admissions",
  },
  { id: 2, text: "All criteria info about admissions" },
  {
    id: 3,
    text: "Free subscription for daily updates ",
  },
];

interface ICategories {
  id: number;
  icon: any;
  text: string;
  innerList: {
    id: number;
    type: "list" | "checkbox" | "popup";
    icon?: any;
    endText?: string;
    innerList?: { id: number; text: string }[];
    popupValue?: { key: "currencyChanger" };
    text: string;
  }[];
}

export const categoriesList: ICategories[] = [
  {
    id: 1,
    icon: GridOnIcon,
    text: "Discipline",
    innerList: [
      {
        id: 11,
        type: "list",
        icon: ForestOutlinedIcon,
        text: "Agriculture and Forestory",
      },
    ],
  },
  {
    id: 2,
    icon: LocationOnOutlinedIcon,
    text: "location",
    innerList: [
      {
        id: 21,
        type: "checkbox",
        text: "United Kingdom",
        endText: "234",
        innerList: [{ id: 211, text: "Wales" }],
      },
    ],
  },
  {
    id: 3,
    icon: AttachMoneyOutlinedIcon,
    text: "Tution Fee",
    innerList: [
      { id: 31, text: "0-500", type: "checkbox", endText: "2134" },
      { id: 32, text: "500-1000", type: "checkbox", endText: "234" },
      {
        id: 33,
        text: "change currency",
        type: "popup",
        popupValue: { key: "currencyChanger" },
      },
    ],
  },
  {
    id: 4,
    icon: WatchLaterOutlinedIcon,
    text: "Duration",
    innerList: [
      { id: 41, text: "Less than 1 year", type: "checkbox", endText: "234" },
      { id: 42, text: "1 year", type: "checkbox", endText: "234" },
      {
        id: 43,
        text: "1½ years",
        type: "checkbox",
        endText: "234",
      },
      {
        id: 44,
        text: "2 years",
        type: "checkbox",
        endText: "234",
      },
      {
        id: 45,
        text: "More than 2 years",
        type: "checkbox",
        endText: "234",
      },
    ],
  },
  {
    id: 5,
    icon: SchoolOutlinedIcon,
    text: "Degree Type",
    innerList: [
      {
        id: 51,
        text: "M.Sc master of science",
        type: "checkbox",
        endText: "234",
      },
      { id: 52, text: "M.A master of Arts", type: "checkbox", endText: "234" },
      {
        id: 53,
        text: "MBA master of Business Administration",
        type: "checkbox",
        endText: "234",
      },
      {
        id: 54,
        text: "LLM Master of laws",
        type: "checkbox",
        endText: "234",
      },
      {
        id: 55,
        text: "M.Phil master of philosphy",
        type: "checkbox",
        endText: "234",
      },
    ],
  },
];
