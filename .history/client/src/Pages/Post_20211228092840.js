import React from "react";
import { Data } from "../Utils/Data";
const Post = () => {
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
