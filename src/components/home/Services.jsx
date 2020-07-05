import React from "react";

export const Services = (props) => {
  return (
    <>
      <div className="row p-3 m-5">
        <div className="col text-center">
          <h2>We provide this content for you.</h2>
        </div>
      </div>
      <div className="row">
        <div class="col-4 col-xs-12">
          <div className="text-center p-3">
            <i class="material-icons md-48 font-size-48">perm_media</i>
            <h3>Lot of content</h3>
            <h6>
              {props.description}We want to make sure there is a lot of content
              for everyone
            </h6>
          </div>
        </div>
        <div class="col-4 col-xs-12">
          <div className="text-center p-3">
            <span class="material-icons">account_box</span>
            <h3>{props.title}Registration</h3>
            <h6>
              {props.description}We provide registration bc we want everyone to
              be safe
            </h6>
          </div>
        </div>
        <div class="col-4 col-xs-12">
          <div className="text-center p-3">
            <span class="material-icons">comment_bank</span>
            <h3>{props.title}Contact us</h3>
            <h6>
              {props.description}Fell free to contact us anytime, we will
              appreciate your feedback
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};
