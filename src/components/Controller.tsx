import React from "react";
import Search from "./Search";
import getBusinesses from "../API/YelpAPIService";
import { useQuery } from "react-query";
import { Business } from "../types";
import BusinessListItem from "./BusinessListItem";

const Controller: React.FunctionComponent = () => {
  const [location, setLocation] = React.useState<string>("");

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  const handleLocationSubmit = () => {
    console.log(location);
    refetch();
  };

  const { data, error, isLoading, refetch } = useQuery(
    location,
    () => getBusinesses({ location: encodeURIComponent(location) }),
    { enabled: false }
  );

  return (
    <>
      <Search
        handleLocationChange={handleLocationChange}
        handleLocationSubmit={handleLocationSubmit}
        location={location}
      />
      {isLoading && <h1>Loading...</h1>}
      {error && (
        <h1>
          {
            /* @ts-ignore */
            error.message
          }
        </h1>
      )}
      {data &&
        data.data.businesses
          .sort((a: Business, b: Business) => {
            return a.rating - b.rating;
          })
          .map((business: Business) => (
            <BusinessListItem business={business} key={business.id} />
          ))}
    </>
  );
};

export default Controller;
