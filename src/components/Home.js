import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import "./Home.css";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const data = await getDocs(collection(db, "posts"));
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextcontainer">{post.postText}</div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.userName}</h3>
              {post.author.id === auth.currentUser.uid && (
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
