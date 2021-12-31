import { useEffect, useState } from 'react';
import { FriendData } from '../types/friends/friend';
import { httpGetUsers } from './requests';

export const useFriends = (): {
  friends: FriendData[];
} => {
  const [friends, setFriends] = useState<FriendData[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await httpGetUsers();
      setFriends(users);
    };

    getUsers();
  }, []);

  return {
    friends,
  };
};
