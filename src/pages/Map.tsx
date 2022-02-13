/* eslint-disable @typescript-eslint/no-explicit-any */
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import { getCoordinates, getPosts } from '../api';

import ButtonFooter from '../components/common/ButtonFooter';
import Header from '../components/explore/Header';
import { IPost } from '../types';
// import Post from '../components/explore/Post';
import { useAppContext } from '../contexts/app.context';

const Map = () => {
  const [posts, setPosts] = useState<IPost[] | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasError, setHasError] = useState<boolean>(false);
  const [location, setLocation] = useState<any>();
  const filters = useAppContext();
  const loadPosts = async () => {
    await getPosts(filters)
      .then((response) => setPosts(response))
      .catch((error) => {
        console.log(error);
        setHasError(true);
      });
  };

  const getLocation = async () => {
    await getCoordinates().then((response: any) => setLocation(response));
  };

  useEffect(() => {
    loadPosts();
    getLocation();
  }, []);
  return (
    <div className="ExploreContainer">
      <Header />
      <div id="map"></div>
      <MapContainer
        center={
          location
            ? [location.coords.latitude, location.coords.longitude]
            : [51.5251312, -0.0712174]
        }
        style={{ height: '500px', width: '100%' }}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          //   attribution={
          //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          //   }
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {posts?.map((post: IPost, index: number) => (
          <Marker position={[post.lat as any, post.long as any]} key={index}>
            <Popup>{post.locationName}</Popup>
          </Marker>
        ))}
      </MapContainer>
      {/* <div className="PostListContainer">
        {posts?.map((post: IPost, index: number) => (
          <Post post={post} key={index} />
        ))}
      </div> */}
      <ButtonFooter />
    </div>
  );
};

export default Map;
