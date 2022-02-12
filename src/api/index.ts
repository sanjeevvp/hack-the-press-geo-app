/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export interface IPost {
  name: string;
  title: string;
  text: string;
  place: string;
  tags: string[];
  lat?: string;
  long?: string;
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
