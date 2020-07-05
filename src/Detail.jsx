import React from "react";
import { Navigation } from "./components/Navigation";

export const Detail = () => {
  return (
    <React.Fragment>
      <Navigation />
      <div className="container">
        Detail component
        <p>Hey</p>
      </div>
    </React.Fragment>
  );
};
