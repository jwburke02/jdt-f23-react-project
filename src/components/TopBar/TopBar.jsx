import React from 'react'

import * as MUI from '@mui/material'

function TopBar() {
    return(
        <MUI.AppBar sx={{height: "90px"}} position="fixed">
            <MUI.Stack sx={{height: "90px"}} justifyContent="center" alignItems="center">
                <MUI.Typography variant="h3">Phorm</MUI.Typography>
            </MUI.Stack>   
        </MUI.AppBar>
    )
}

export default TopBar