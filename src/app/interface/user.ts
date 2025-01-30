export interface User {
  _id:           string;
  isActive:      boolean;
  balance:       string;
  picture:       string;
  age:           number;
  name:          Username;
  company:       string;
  email:         string;
  address:       string;
  tags:          string[];
  favoriteFruit: string;
}

interface Username {
  first: string;
  last:  string;
}

export type Column = {field: string; header: string}

export enum UserKeys {
  _id = '_id',
  isActive = 'isActive',
  balance = 'balance',
  picture = 'picture',
  age = 'age',
  name = 'name',
  company = 'company',
  email = 'email',
  address = 'address',
  tags = 'tags',
  favoriteFruit = 'favoriteFruit'
}

