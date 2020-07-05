import React from "react";

export const PostCard = (props) => {
  return (
    <div class="col-4">
      <div>
        <img src={props.imgURL} alt="" />
        <h3>{props.title}Title</h3>
        <h6>{props.description}Description</h6>
      </div>
    </div>
  );
};
