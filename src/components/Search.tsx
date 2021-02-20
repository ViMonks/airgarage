import React from "react";

type ISearch = {
  handleLocationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationSubmit: () => void;
  location: string;
};

const Search: React.FunctionComponent<ISearch> = ({
  handleLocationChange,
  handleLocationSubmit,
  location,
}: ISearch) => {
  return (
    <>
      <input type="text" value={location} onChange={handleLocationChange} />
      <button onClick={handleLocationSubmit}>Search</button>
    </>
  );
};

export default Search;
