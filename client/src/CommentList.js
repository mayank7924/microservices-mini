import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function CommentList({postId}) {
    const [comments, setComments] = useState([])

    const fetchData = async () => {
        const result = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComments(result.data)
    }

    //effect callbacks are synchronous to prevent race conditions
    useEffect(()=>{
        fetchData()
    }, [])

    return (
        <div>
            <ul>
                {comments.map(comment => {return <li key={comment.id}>{comment.content}</li>})}
            </ul>
        </div>
    )
}
