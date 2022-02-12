export interface IPost {
  id: string;
  name: string;
  title: string;
  text: string;
  locationName: string;
  postingType: string;
  tags: string[];
  lat?: string;
  long?: string;
}
