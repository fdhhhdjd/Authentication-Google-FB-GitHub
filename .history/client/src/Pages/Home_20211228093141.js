import React from "react";
import { Card } from "../Components/Card";
import { Data } from "../Utils/Data";
const Home = () => {
  return (
    <>
      <div className="home">
        {Data.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Home;
