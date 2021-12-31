import { FriendData } from '../../../types/friends/friend';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useNavigate } from 'react-router-dom';

const FriendsItem = ({ friend }: { friend: FriendData }) => {
  const navigate = useNavigate();

  const clickHandler = (id: number): void => {
    navigate(`/friends/${id}`);
  };

  return (
    <ListItem>
      <ListItemText
        onClick={() => clickHandler(friend.id)}
        primary={friend.username}
      />
    </ListItem>
  );
};

export default FriendsItem;
