import React from "react";
import { Card } from "../Components/Card";
import { post } from "../Utils/Data";
const Home = () => {
  return (
    <>
      <div className="home">
        {post.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Home;
