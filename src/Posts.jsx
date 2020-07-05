import React, { useContext } from "react";
import { Navigation } from "./components/Navigation";
import { LoggedNavigation } from "./components/LoggedNavigation";
import { getPosts } from "./service";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { PostCard } from "./components/PostCard";

export const Posts = () => {
  const { user, setUser } = useContext(UserContext);

  const data = getPosts();
  return user == null ? (
    <React.Fragment>
      <Navigation />

      <div className="container">
        <div className="text-center m-3 p-2">
          <h1>Explore our posts.</h1>
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search for posts"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
        <div>
          ...or add your own{"   "}
          <Link to="/add" className="btn btn-secondary">
            Add new
          </Link>
        </div>
        <div>
          {data.map((post) => {
            return (
              <PostCard
                title={post.title}
                description={post.description}
                content={post.content}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <LoggedNavigation />

      <div className="container">
        <div className="text-center m-3 p-2">
          <h1>Explore our posts.</h1>
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search for posts"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
        </div>
        <div>
          ...or add your own{"   "}
          <Link to="/add" className="btn btn-secondary">
            Add new
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
