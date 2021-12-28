import React from "react";
import { Data } from "../Utils/Data";
const Post = () => {
  return (
    <>
      <div className="post">
        <img src={data.img} alt="" className="postImg" />
        <h1 className="postTitle">{data.title}</h1>
        <p className="postDesc">{data.desc}</p>
        <p className="postLongDesc">{data.longDesc}</p>
      </div>
    </>
  );
};

export default Post;
