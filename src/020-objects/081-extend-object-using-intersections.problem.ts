import { Extends, Expect } from "@total-typescript/helpers";
interface BaseEntity  {
   id: string, 
   createAt: Date
}

type User = {
  name: string;
  email: string;
}

type Product = {

  name: string;
  price: number;
} & BaseEntity

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
