import React from "react";
import Nav from "../../components/Nav/Nav";
import { useSelector } from "react-redux";
import Fisherman from "../../components/Fisherman/Fisherman";
import Fiscal from "../../components/Fiscal/Fiscal";

const Home = () => {
  const {user} = useSelector((state) => state.login)  
  
  return (
  <div>
    <Nav/>
    {
      user?.role === "fisherman" ? (
        <Fisherman/>
      ) : user?.role === "fiscal" && (
        <Fiscal/>
      )
    }
  </div>);
};

export default Home;
