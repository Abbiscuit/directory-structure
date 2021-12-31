import { memo } from 'react';
import Typography from '@mui/material/Typography';

interface FriendsCountProps {
  friends: any[];
}

const FriendsCount = memo(
  ({ friends }: Readonly<FriendsCountProps>): JSX.Element => {
    console.log('FriendsCount render');
    return (
      <Typography gutterBottom variant="body1">
        {friends?.length} 人の友達
      </Typography>
    );
  }
);

export default FriendsCount;
