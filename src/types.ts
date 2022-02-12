export interface IPost {
  name: string;
  title: string;
  text: string;
  locationName: string;
  postingType: string;
  tags: string[];
  lat?: string;
  long?: string;
}
