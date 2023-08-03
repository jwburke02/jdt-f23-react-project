import React from 'react'

import * as MUI from '@mui/material'

import { ThumbDownAlt, ThumbDownOffAlt, ThumbUpAlt, ThumbUpOffAlt } from '@mui/icons-material'

function Thumbnail({post, index, setPost}) {

    const [likes, setLikes] = React.useState(post.likes)
    const [likeIndicator, setLikeIndicator] = React.useState('none')
    const [dislikes, setDislikes] = React.useState(post.dislikes)

    function handleThumbnailClick() {
        //should redirect to a post page
        setPost(index)
    }

    function handleLikeButtonClick() {
        if(likeIndicator == 'none') {
            setLikes(post.likes + 1)
            setLikeIndicator('liked')
        } else if (likeIndicator == 'liked') { //note that this causes no issue (because of both the else and the fact that state will not /update/ until after the function)
            setLikes(post.likes)
            setLikeIndicator('none')
        } else {
            setLikes(post.likes + 1) 
            setDislikes(post.dislikes)
            setLikeIndicator('liked')
        }
    }

    function handleDislikeButtonClick() {
        if(likeIndicator == 'none') {
            setDislikes(post.dislikes + 1)
            setLikeIndicator('disliked')
        } else if (likeIndicator == 'disliked') {
            setDislikes(post.dislikes)
            setLikeIndicator('none')
        } else {
            setDislikes(post.dislikes + 1)
            setLikes(post.likes)
            setLikeIndicator('disliked')
        }
    }

    const likeButton = (likeIndicator == 'liked' ? 
        <MUI.IconButton color='primary' onClick={() => handleLikeButtonClick()} aria-label='like'>
            <ThumbUpAlt />
        </MUI.IconButton>
    :
        <MUI.IconButton color='primary' onClick={() => handleLikeButtonClick()} aria-label='like'>
            <ThumbUpOffAlt />
        </MUI.IconButton>
    )

    const dislikeButton = (likeIndicator == 'disliked' ? 
        <MUI.IconButton color='primary' onClick={() => handleDislikeButtonClick()} aria-label='dislike'>
            <ThumbDownAlt />
        </MUI.IconButton>
    :
        <MUI.IconButton color='primary' onClick={() => handleDislikeButtonClick()} aria-label='dislike'>
            <ThumbDownOffAlt />
        </MUI.IconButton>
    )

  return (
    <MUI.Paper variant="outlined" sx={{width: "640px", height: "240px", marginLeft: "auto", marginRight: "auto", marginTop: "20px"}}>
        <MUI.Stack sx={{width: "600px", height: "240px", marginLeft: "20px", marginRight: "20px"}} direction="column" justifyContent="space-between">
            <MUI.Stack sx={{cursor: "pointer"}} onClick={() => handleThumbnailClick()} alignItems="baseline" justifyContent="space-between" direction="row">
                <MUI.Typography marginTop="10px" variant="h5">{post.title}</MUI.Typography>
                <MUI.Typography marginTop="10px" variant="body1">{post.author}</MUI.Typography>
            </MUI.Stack>
            <MUI.Box onClick={() => handleThumbnailClick()} sx={{overflow: "hidden", height: "120px", cursor: "pointer"}}>
                <MUI.Typography variant='body2'>{post.body}</MUI.Typography>
            </MUI.Box>
            <MUI.Stack alignItems="center" justifyContent="flex-start" direction="row">
                {likeButton}
                <MUI.Typography variant="body2">{likes}</MUI.Typography>
                {dislikeButton}
                <MUI.Typography variant="body2">{dislikes}</MUI.Typography>
            </MUI.Stack>
        </MUI.Stack>
    </MUI.Paper>
  )
}

export default Thumbnail