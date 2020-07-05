import React from "react";

export const HomeCards = (props) => {
  return (
    <>
      <div className="col-3 col-sm-12 p-3 m-1">
        <img className="img-fluid" src={props.imgURL} />
        <h2>{props.title}</h2>
        <h6>{props.description}</h6>
      </div>
    </>
  );
};
