import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";



function Post({ username, caption, imageURL}) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                    className="post_avatar"
                    alt='dileepchil'
                    src="/static/images/avatar/1.jpg"
                />
                <h3>{ username }</h3>
            </div>
            

            <img className="post_image" src={ imageURL } alt="" />
           

    <h4 className="post_text"><strong>{ username }</strong>{ caption }</h4>
            
        </div>
    )
}

export default Post
