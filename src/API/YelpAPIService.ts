import axios from "axios";

type IGetBusinesses = {
  location: string;
};

const myHeaders = {
  Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
};

const getBusinesses = async ({ location }: IGetBusinesses) => {
  return axios
    .get(
      `${process.env.REACT_APP_CORS_PROXY_URL}https://api.yelp.com/v3/businesses/search?categories=parking&sort_by=review_count&location=${location}`,
      { headers: myHeaders }
    )
    .catch((error) => {
      console.log(error);
      throw new Error(error);
    });
};

export default getBusinesses;
