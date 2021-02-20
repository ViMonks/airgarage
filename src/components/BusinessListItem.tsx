import React from "react";
import styled from "styled-components";
import { Business } from "../types";

const StyledBusinessListItem = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  gap: 30px;
  padding-top: 1em;
`;

const StyledImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 2px;
  box-shadow: 1px 2px 8px gray;
`;

type IBusinessListItem = {
  business: Business;
};

const BusinessListItem: React.FunctionComponent<IBusinessListItem> = ({
  business,
}: IBusinessListItem): React.ReactElement => {
  const { location, name, rating, review_count, image_url, url } = business;
  const score = ((review_count * rating) / (review_count + 1)).toPrecision(2);

  return (
    <>
      <StyledBusinessListItem>
        <StyledImage
          src={
            image_url
              ? image_url
              : "https://images.unsplash.com/photo-1530945564459-9cf30d0bf77a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          }
          alt={`${name} image`}
        />
        <div className="details">
          <div>
            <h3>{name}</h3>
          </div>
          <div>{location.address1}</div>
          <div>{`Rating: ${rating}, Review Count: ${review_count}, Score: ${score}`}</div>
          <a href={url} target="_blank" rel="noreferrer">
            Link
          </a>
        </div>
      </StyledBusinessListItem>
    </>
  );
};

export default BusinessListItem;
