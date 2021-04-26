/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-02-07 11:17:52
 * @modify date 2021-02-07 11:17:52
 * @desc [description]
 */
import { ProductInOrder } from './product-in-order.model';

export class Order {
  orderId: string;
  buyerEmail: string;
  buyerName: string;
  buyerPhone: string;
  buyerAddress: string;
  buyerState: string;
  buyerCity: string;
  buyerPincode: string;
  orderAmount: number;
  discountedAmount: number;
  deliveryCharge: number;
  finalPrice: number;
  products: ProductInOrder[];
  paymentId: string;
  orderStatus: string;
  userId: string;
  paymentType: string;
}
