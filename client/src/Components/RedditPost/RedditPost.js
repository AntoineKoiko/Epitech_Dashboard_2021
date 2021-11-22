import React from 'react';
import { Divider } from '@material-ui/core';

function RedditPost ({author, title}) {
    return (
        <div className="reddit-post">
            <p>
                Posted by {author}
            </p>
            <h4>
                {title}
            </h4>
            <Divider/>
        </div>
    )
}

export default RedditPost;

