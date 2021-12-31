import { useEffect, useState } from 'react';

interface UserResponse {
  user: Readonly<User> | undefined;
}

type Role = 'user' | 'admin';

export interface User {
  uid: string;
  name: string;
  email: string;
  role: Role;
  createdAt: string;
}

export const useUser = (): Readonly<UserResponse> => {
  const [user, setUser] = useState<Readonly<User>>();

  useEffect(() => {
    setUser({
      uid: 'hiros1233asf',
      name: 'Hiro',
      email: 'hiro@gmail.com',
      role: 'admin',
      createdAt: '2022-12-20',
    });
  }, []);

  return { user };
};
