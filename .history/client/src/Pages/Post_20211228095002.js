import React from "react";
import { posts } from "../Utils/Data";
import { useLocation } from "react-router";
const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const Data = posts.find((p) => p.id.toString() === path);

  console.log(location);
  return (
    <>
      <div className="post">
        <img src={Data.img} alt="" className="postImg" />
        <h1 className="postTitle">{Data.title}</h1>
        <p className="postDesc">{Data.desc}</p>
        <p className="postLongDesc">{Data.longDesc}</p>
      </div>
    </>
  );
};

export default Post;
