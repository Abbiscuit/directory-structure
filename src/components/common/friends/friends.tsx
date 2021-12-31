import { useMemo, useCallback, useState } from 'react';
import type { ChangeEvent } from 'react';
import { useFriends } from '../../../hooks/use-friends';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import FriendsList from './friends-list';
import FriendsTitle from './friends-title';
import FriendsSearch from './friends-search';
import { FriendData } from '../../../types/friends/friend';

// Container Component的に使用する
// ロジックはこちらに置き、基本的にpropsを渡す

const Friends = () => {
  const { friends } = useFriends();
  const [inputText, setInputText] = useState<string>('');

  const changeInputTextHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setInputText(event.target.value);
    },
    []
  );

  const filterFriends: FriendData[] = useMemo(() => {
    return friends.filter(friend =>
      friend.username.toLowerCase().includes(inputText.toLowerCase())
    );
  }, [friends, inputText]);

  return (
    <Box paddingX={2} paddingY={2}>
      <Stack spacing={2}>
        <FriendsSearch
          inputText={inputText}
          onChangeInputText={changeInputTextHandler}
        />
        <FriendsTitle friends={friends} />
        <FriendsList friends={filterFriends} />
      </Stack>
    </Box>
  );
};

export default Friends;
