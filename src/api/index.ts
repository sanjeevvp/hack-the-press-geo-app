import { IPost } from '../types';
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const BASE_URL = 'http://18.170.119.206:5000';

export async function getPosts() {
  const response = await axios.get(`${BASE_URL}/api/posts`);
  console.log(response.data);
  return response.data;
}

export async function getPost(postId: string) {
  const response = await axios.get(`${BASE_URL}/api/posts/${postId}`);
  console.log(response);
  return response.data;
}

export async function publishPostWithGeoData(data: IPost) {
  navigator.geolocation.getCurrentPosition(async (coord) => {
    data.lat = coord.coords.latitude as any;
    data.long = coord.coords.longitude as any;
    data = data as IPost;
    console.log(data);
    await axios.post(`${BASE_URL}/api/posts`, data);
  });
}

export async function getCoordinates() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export async function getGeocoding() {
  const location: any = await getCoordinates();
  const data = await axios.get(
    `${BASE_URL}/api/location/nearby-places?lat=${location.coords.latitude}&long=${location.coords.longitude}`
  );
  return data.data as string[];
}
