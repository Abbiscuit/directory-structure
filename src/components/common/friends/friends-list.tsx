import { memo } from 'react';

import List from '@mui/material/List';

import FriendsItem from './friends-item';
import { FriendData } from '../../../types/friends/friend';

const FriendsList = memo(({ friends }: { friends: FriendData[] }) => {
  return (
    <List>
      {friends?.map(friend => {
        return <FriendsItem key={friend.id} friend={friend} />;
      })}
    </List>
  );
});

export default FriendsList;
