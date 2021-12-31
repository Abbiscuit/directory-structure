import { useEffect, useState } from 'react';
import { ClubsData } from '../types/clubs/club';
import { httpGetPhotos } from './requests';

export const usePhotos = (): {
  photos: ClubsData[];
} => {
  const [photos, setPhotos] = useState<ClubsData[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      const fetchedPhotos = await httpGetPhotos();
      setPhotos(fetchedPhotos);
    };

    getPhotos();
  }, []);

  return {
    photos,
  };
};
