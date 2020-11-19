import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';



const Home = () => {

    const [post,setPost]=useState([]);

    useEffect(() =>
    {
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res=>res.json())
          .then( data => setPost(data))      
    },[])
    return (
        <div>
           
           {post.map(p=><Post post={p}></Post>)}
        </div>
    );
};

export default Home;