import React from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'

export default function App() {
    return (
        <div className='container'>
            <h1>Post Create</h1>
            <PostCreate/>
            <h1>Posts</h1>
            <PostList/>
        </div>
    )
}
