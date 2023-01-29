import { IProduct } from './product';

export interface IResponse {
  count: number;
  products: IProduct[];
}
