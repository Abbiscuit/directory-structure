import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ClubsList from './clubs-list';
import { usePhotos } from '../../../hooks/use-photos';

const Clubs = () => {
  const { photos } = usePhotos();

  return (
    <Box paddingX={2} paddingY={2} bgcolor={'#fafafa'}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" component="h3" fontWeight={600}>
          クラブ一覧
        </Typography>
      </Box>

      <ClubsList clubs={photos} />
    </Box>
  );
};

export default Clubs;
