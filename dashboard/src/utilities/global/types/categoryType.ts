export interface ICategoryType {
  id?: string;
  name: string;
  iconLink?: string;
  subCategories?: ISubCategoryType[];
}

export interface ISubCategoryType {
  parentCategoryId: string;
  name: string;
  iconLink?: string;
}
