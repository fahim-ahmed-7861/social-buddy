import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentCart from '../CommentCart/CommentCart';

const Details = (props) => {

    const [user, setUser] = useState([]);

    const [comment, setComment] = useState([]);


    const { id } = useParams();

  

    let url = 'https://jsonplaceholder.typicode.com/posts/';
    url += id;

    let commentUrl = 'https://jsonplaceholder.typicode.com/comments/'

  


   


    useEffect(() => {


        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));


    }, [])

  

    useEffect(() => {

        fetch(commentUrl)
            .then(res => res.json())
            .then(data => setComment(data));


    }, [])

   
    const Allcomment=comment.filter(pd => pd.postId==id);

   

    return (
        <div style={{ padding: '20px', textAlign: 'center'}}>
            <h1>Usee ID : {user.id}</h1>
            <h3>{user.title}</h3>
            <p>{user.body}</p>

            <h3 style={{textAlign:'center'}}>Comment Count : {Allcomment.length}</h3>

                <div style={{textAlign:'center'}}>
            {
            
                Allcomment.map(cd=><CommentCart comment={cd} ></CommentCart>)

                
            }
            </div> 
            
        </div>
    );
};

export default Details;