import React from "react";
import { Navigation } from "./Navigation";

export const AddNewForm = (props) => {
  const addNew = () => {};
  return (
    <>
      <Navigation />
      <div className="container p-3 ">
        <form>
          <div class="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Title"
            />
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <input
              type="text"
              class="form-control"
              id="description"
              placeholder="Description"
            />
          </div>
          <div class="form-group">
            <label for="content">Content</label>
            <textarea
              class="form-control"
              id="content"
              rows="3"
              placeholder="Content"
            ></textarea>
          </div>
          <br />
          <button onclick={addNew()}>Add</button>
        </form>
      </div>
    </>
  );
};
