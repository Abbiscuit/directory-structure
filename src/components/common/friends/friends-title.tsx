import { memo } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FriendsCount from './friends-count';
import { FriendData } from '../../../types/friends/friend';

/* Genericsなどを使用して汎用的なコンポーネント化可能かも？ */

const FriendsTitle = memo(({ friends }: { friends: FriendData[] }) => {
  console.log('FriendsTitle render');

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant="h6" component="h3" fontWeight={600}>
        友達リスト
      </Typography>
      <FriendsCount friends={friends} />
    </Box>
  );
});

export default FriendsTitle;
