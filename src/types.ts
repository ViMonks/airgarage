type Location = {
  city: string;
  country: string;
  address2: string;
  address3: string;
  state: string;
  address1: string;
  zip_code: string;
};

export type Business = {
  rating: number;
  price: string;
  phone: string;
  id: string;
  alias: string;
  is_closed: Boolean;
  categories: { alias: string; title: string }[];
  review_count: number;
  name: string;
  url: string;
  coordinates: { latitude: number; longitude: number };
  image_url: string;
  location: Location;
  distance: number;
  transactions: string[];
};

export type YelpAPIResponse = {
  total: number;
  businesses: Business[];
  region: { center: { latitude: number; longitude: number } };
};
