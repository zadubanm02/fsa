import React, { useContext } from "react";
import { Navigation } from "./components/Navigation";
import { LoggedNavigation } from "./components/LoggedNavigation";
import { Landing } from "./components/home/Landing.jsx";
import { PostCard } from "./components/PostCard";
import { Services } from "./components/home/Services";
import { ToPosts } from "./components/home/ToPosts";
import { UserContext } from "./UserContext";
export const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return user == null ? (
    <React.Fragment>
      <Navigation />
      <Landing />

      <div className="container">
        <Services />
        <ToPosts />
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <LoggedNavigation />
      <Landing />

      <div className="container">
        <Services />
        <ToPosts />
      </div>
    </React.Fragment>
  );
};
