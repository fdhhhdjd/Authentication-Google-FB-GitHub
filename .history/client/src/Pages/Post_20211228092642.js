import React from "react";
import { data } from "../Utils/Data";
const Post = () => {
  const post = data;
  return (
    <>
      <div className="post">
        <img src={post.img} alt="" className="postImg" />
        <h1 className="postTitle">{post.title}</h1>
        <p className="postDesc">{post.desc}</p>
        <p className="postLongDesc">{post.longDesc}</p>
      </div>
    </>
  );
};

export default Post;
