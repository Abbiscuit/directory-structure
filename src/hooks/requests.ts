import { ClubsData } from '../types/clubs/club';
import { FriendData } from '../types/friends/friend';

export async function httpGetUsers(): Promise<FriendData[]> {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!resp.ok) {
    throw new Error('Response is not okay');
  }

  const users = await resp.json();
  return users;
}

export async function httpGetPhotos(): Promise<ClubsData[]> {
  const resp = await fetch('https://jsonplaceholder.typicode.com/photos');

  if (!resp.ok) {
    throw new Error('Response is not okay');
  }

  const photos = await resp.json();
  return photos;
}
