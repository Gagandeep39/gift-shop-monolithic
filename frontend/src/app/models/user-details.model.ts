/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2021-01-30 01:25:36
 * @modify date 2021-01-30 01:25:36
 * @desc [description]
 */

import { Address } from './address.model';

export class UserDetails {
  address: Address;
  emailId: string;
  firstName: string;
  lastName: string;
  phoneNo: string;
  role: string;
  userId: number;
  username: string;
}
