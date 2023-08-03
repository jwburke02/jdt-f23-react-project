import React from 'react'

import * as MUI from '@mui/material'

import Thumbnail from './Thumbnail'
import FullPost from './FullPost'

function Dashboard({user, userList, postList}) {

    const [post, setPost] = React.useState(null)

    function generateRender() {
        return postList.map((currPost, i) => {
            return(
                <Thumbnail index={i} key={i} post={currPost} setPost={setPost} />
            )
        })
    }

    return (
        (post == null?
            <MUI.Paper sx={{width: "100%", height:"100%"}}>
                <MUI.Stack paddingTop="110px" alignItems="center">
                    <MUI.Typography sx={{margin:"auto"}} variant="h4">Welcome, {user.first_name}</MUI.Typography>
                </MUI.Stack>
                <MUI.Stack direction="column" alignItems="center" justifyContent="space-around">
                    {generateRender()}
                </MUI.Stack>
            </MUI.Paper>
        :
            <FullPost postList={postList} post={post} />
        )
    )
}

export default Dashboard