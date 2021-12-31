import { AddressData } from './address';
import { CompanyData } from './company';
import { GeoData } from './geo';

export type FriendData = Readonly<{
  id: number;
  address: AddressData;
  geo: GeoData;
  street: string;
  suite: string;
  zipcode: string;
  company: CompanyData;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}>;
