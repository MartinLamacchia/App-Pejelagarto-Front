import React from "react";
import Nav from "../../components/Nav/Nav";
import { useSelector } from "react-redux";
import Fisherman from "../../components/Fisherman/Fisherman";
import Fiscal from "../../components/Fiscal/Fiscal";
import Judge from "../../components/Judge/Judge";

const Home = () => {
  const {user} = useSelector((state) => state.login)  
  
  return (
  <div>
    <Nav/>
    {
      user?.role === "fisherman" ? (
        <Fisherman/>
      ) : user?.role === "fiscal" ? (
        <Fiscal/>
      ) : user?.role === "judge" && (
        <Judge/>
      )
    }
  </div>);
};

export default Home;
