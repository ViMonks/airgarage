import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 80em;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
    Helvetica, "Muli", Arial, "Lucida Grande", sans-serif;
  line-height: 1.5;
  padding: 2em 2em 8em;
`;

export const Layout: React.FunctionComponent = ({ children }) => {
  return <Container>{children}</Container>;
};
