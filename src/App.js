import './App.css';
import axios from 'axios';
// import { useState, useEffect } from 'react';
import React, {useState,useEffect} from 'react'

function App() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);

        setPosts(newPosts);
      });
  }, []);

  return (
    <>
      <h1>reactjs</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

    </>
  );
}

export default App;

