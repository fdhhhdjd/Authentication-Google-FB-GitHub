import React from "react";
import Card from "../Components/Card";
import { posts } from "../Utils/Data";
const Home = () => {
  return (
    <>
      <div className="home">
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Home;
