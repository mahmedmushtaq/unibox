import { IUniversityType } from "./universityTypes";

export interface ICourseType {
  id: string;
  name: string;
  description: string;
  websiteLink: string;
  slug: string;
  university: IUniversityType;
  startDate: string;
  location: string;
  discipline: string;
  degreeType: string;
  fee: string;
  duration: string;
}
