import React from 'react'

import * as MUI from '@mui/material'

import { buttonStyles, textFieldStyles } from '../../constant'

function LogInModal({setLogInOpen, userList, setUser, setIsAuthenticated}) {
    function handleCancel() {
        document.getElementById('username-login').value = ''
        document.getElementById('password-login').value = ''
        setLogInOpen(false)
    }

    function handleLogIn() {
        if(document.getElementById('username-login').value in userList) {
            if(document.getElementById('password-login').value == userList[document.getElementById('username-login').value].password) {
                const user = userList[document.getElementById('username-login').value]
                console.log(user)
                setUser(user)
                setIsAuthenticated(true)
            } else {
                console.log("WRONG PASSWORD")
            }
        }
    }
    return (
        <MUI.Container sx={{width: "600px", height: "380px", position: "absolute", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}>
            <MUI.Stack alignItems="center" direction="column">
                <MUI.Typography marginTop="10px" alignSelf="center" variant="h4">Log In to Phorm: </MUI.Typography>
                <MUI.TextField id="username-login" sx={textFieldStyles} placeholder='Username'></MUI.TextField>
                <MUI.TextField type="password" id="password-login" sx={textFieldStyles} placeholder='Password'></MUI.TextField>
                <MUI.Stack sx={{width: "600px"}} justifyContent="space-around" direction="row">
                    <MUI.Button onClick={() => handleCancel()} sx={buttonStyles} variant="outlined">Cancel</MUI.Button>
                    <MUI.Button onClick={() => handleLogIn()} sx={buttonStyles} variant="contained">Log In</MUI.Button>
                </MUI.Stack>
            </MUI.Stack>
        </MUI.Container>
    )
}

export default LogInModal