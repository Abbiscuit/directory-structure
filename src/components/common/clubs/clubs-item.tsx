import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ClubsData } from '../../../types/clubs/club';

interface ClubsItemProps {
  club: ClubsData;
}

const ClubsItem = ({ club }: ClubsItemProps) => {
  return (
    <Grid item xs={6}>
      <Card>
        <CardMedia
          image={club.thumbnailUrl}
          component="img"
          alt={club.title}
          width={'100%'}
        />
        <CardContent>
          <Typography>{club.title}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ClubsItem;
