import React from "react";
import Nav from "../../components/Nav/Nav";
import { useSelector } from "react-redux";

const Home = () => {
  const {user} = useSelector((state) => state.login)

  console.log(user);
  
  
  return (
  <div>
    <Nav/>
    {
      user.role = "fisherman"
    }
  </div>);
};

export default Home;
