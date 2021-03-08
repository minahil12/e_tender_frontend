
import React, { useEffect, useState, Component } from 'react';

import posts from './posts';
import postLoading from './postLoading'

const Tenders=()=>{
    const PostLoading = postLoading(posts);
    const [appState , setAppState] = useState({
        loading: false,
        posts: null
    })

    useEffect(()=>{
        setAppState({ loading: true});
        const apiURL = "http://127.0.0.1:8000/api/profile/";
        fetch(apiURL)
        .then((data)=>data.json())
        .then((posts)=>{
            setAppState({ loading: false, posts: posts});
        })
    }, [setAppState])
    return(
        <div>
            <h2>Latest Tenders</h2>
        
        <PostLoading isLoading={appState.loading} posts={appState.posts}/>
        </div>
    )
}
export default Tenders;