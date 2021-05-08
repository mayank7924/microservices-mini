import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function CommentList({comments}) {
    return (
        <div>
            <ul>
                {comments.map(comment => {return <li key={comment.id}>{comment.content}</li>})}
            </ul>
        </div>
    )
}
