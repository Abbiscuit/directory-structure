import { ChangeEvent, memo } from 'react';

import { SearchOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

interface FriendsSearchProps {
  inputText: string;
  onChangeInputText?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FriendsSearch = memo(
  ({ inputText, onChangeInputText }: FriendsSearchProps): JSX.Element => {
    console.log('FriendsSearch render');

    return (
      <Box component="form" noValidate autoComplete="off">
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
          value={inputText}
          size="small"
          label="名前で検索"
          variant="outlined"
          fullWidth
          onChange={onChangeInputText}
        />
      </Box>
    );
  }
);

export default FriendsSearch;
