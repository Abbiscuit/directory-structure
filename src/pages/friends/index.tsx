import Grid from '@mui/material/Grid';

import { Clubs, Friends, Restaurant } from '../../components/common';

const FriendsPage = () => {
  return (
    <Grid container>
      <Grid item sm={12} width={'100%'}>
        <Restaurant />
      </Grid>
      <Grid item sm={12} lg={2} width={'100%'}>
        <Friends />
      </Grid>
      <Grid item sm={12} lg={10} width={'100%'}>
        <Clubs />
      </Grid>
    </Grid>
  );
};

export default FriendsPage;
