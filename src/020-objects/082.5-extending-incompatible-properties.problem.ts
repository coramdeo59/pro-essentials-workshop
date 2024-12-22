interface UserPart  {
  id: string;
  name: string;
  age: number;
};

interface User extends UserPart  {
  phone: string;
};



const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};
