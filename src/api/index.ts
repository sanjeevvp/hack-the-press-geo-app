/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { IPost } from '../types';

export async function getPosts() {
  const response = await axios.get(
    'https://3e3a-86-130-236-97.ngrok.io/api/posts'
  );
  console.log(response.data);
  return response.data;
}

export async function getPost(postId: string) {
  const response = await axios.get(
    `https://3e3a-86-130-236-97.ngrok.io/api/posts/${postId}`
  );
  console.log(response);
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
