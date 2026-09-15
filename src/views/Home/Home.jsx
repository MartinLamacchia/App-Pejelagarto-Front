import React from "react";
import Nav from "../../components/Nav/Nav";
import { useSelector } from "react-redux";
import Fisherman from "../../components/Fisherman/Fisherman";

const Home = () => {
  const {user} = useSelector((state) => state.login)

  console.log(user.role);
  
  
  return (
  <div>
    <Nav/>
    {
      user?.role === "fisherman" && (
        <Fisherman/>
      )
    }
  </div>);
};

export default Home;
