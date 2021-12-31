import { memo } from 'react';

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';

import { ClubsData } from '../../../types/clubs/club';
import ClubsItem from './clubs-item';

interface ClubsListProps {
  readonly clubs: ClubsData[];
}

const ClubsList = memo(({ clubs }: ClubsListProps) => {
  console.log('ClubsList render');
  return (
    <List>
      <Grid container rowSpacing={2} columnSpacing={2}>
        {clubs?.slice(0, 10).map(club => (
          <ClubsItem key={club.id} club={club} />
        ))}
      </Grid>
    </List>
  );
});

export default ClubsList;
