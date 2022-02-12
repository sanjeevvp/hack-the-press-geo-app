/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { IPost } from '../types';

export async function getPosts() {
  const response = await axios.get(
    'https://run.mocky.io/v3/4083c0eb-fdd6-49ff-a160-e8251dbbe492'
  );
  return response.data;
}

export async function publishPostWithGeoData(data: IPost) {
  navigator.geolocation.getCurrentPosition((coord) => {
    data.lat = coord.coords.latitude as any;
    data.long = coord.coords.longitude as any;
  });

  data = data as IPost;
  console.log(data);
  await axios.post('/posts', data);
}
