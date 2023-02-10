import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [post, setPost] = useState([]);
  const [name, setName] = useState("alex");

  // componentDidMount
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/posts/";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setPost(res.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   componentDidUpdate
  useEffect(() => {
    console.log("updated name");
  }, [name]);

  //componentWillUnmount
  useEffect(() => {
    console.log("data changed");
    // window.addEventListener();
    // setInterval()

    return () => {
      console.log("data is to be changed");
      //   window.removeEventListener();
      // clearTimeout();
    };
  }, [name]);

  const postList = post.length ? (
    <p>
      {post.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <p>Title: {item.title}</p>
            <p>Body: {item.body}</p>
          </React.Fragment>
        );
      })}
    </p>
  ) : (
    <p>No Post Yet</p>
  );

  return (
    <>
      <h2>Use Effect</h2>
      {postList}
    </>
  );
};

export default UseEffectHook;
