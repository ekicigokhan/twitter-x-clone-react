import Post from "~/components/post";
import { posts } from "~/mock/posts";
import { Virtualizer } from "virtua";
import { useState } from "react";

export default function ForYou() {
  const [postss, setPostss] = useState([]);
  return (
    // <Virtualizer
    //   onRangeChange={(start, end) => {
    //     console.log(start, "START");
    //     console.log(end, "END");
    //     if (end + 1 === posts.length) {
    //       setPosts((prev) => [...prev, ...postData]);
    //     }
    //   }}
    // >
    <>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </>

    // </Virtualizer>
  );
}
