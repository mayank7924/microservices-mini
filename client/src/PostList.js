import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

export default function PostList() {
    const [posts, setPosts] = useState({})

    const fetchPosts = async () => {
        const result = await axios.get('http://localhost:4000/posts')
        setPosts(result.data)
    }

    //effect callbacks are synchronous to prevent race conditions
    useEffect(()=>{
        fetchPosts()
    }, [])

    const renderedPosts = Object.values(posts).map( post => {
        return <div className="card"
            style={{marginBottom: "20px", width: "30%"}}
            key={post.id}
            >
                <div className="card-body">
                    <h3>{post.title}</h3>
                    <CommentList postId={post.id}/>
                    <CommentCreate postId={post.id}/>
                </div>

        </div>
    })
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPosts}
        </div>
    )
}
