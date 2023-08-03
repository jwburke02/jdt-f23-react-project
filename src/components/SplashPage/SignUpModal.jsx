import React from 'react'

import * as MUI from '@mui/material'

import { buttonStyles, textFieldStyles } from '../../constant'

function SignUpModal({setSignUpOpen, userList, setUser, setUserList, setIsAuthenticated}) {
    function handleCancel() {
        document.getElementById('first-signup').value = ''
        document.getElementById('email-signup').value = ''
        document.getElementById('username-signup').value = ''
        document.getElementById('password-signup').value = ''
        setSignUpOpen(false)
    }

    function handleSignUp() {
        if( document.getElementById('first-signup').value != '' &&
        document.getElementById('email-signup').value != '' &&
        document.getElementById('username-signup').value != '' &&
        document.getElementById('password-signup').value != '') {
            const user = {
                first_name: document.getElementById('first-signup').value,
                email: document.getElementById('email-signup').value,
                user_name: document.getElementById('username-signup').value,
                password: document.getElementById('password-signup').value
            }
            if(user.user_name in userList) {
                console.log("User already exists")
                return
            } else {
                setUser(user)
                setIsAuthenticated(true)
                let newUsers = userList;
                newUsers[user.user_name] = user
                setUserList(newUsers)
                console.log(newUsers) //just for fun to check
            }
        }
    }
  
    return (
        <MUI.Container sx={{width: "600px", height: "380px", position: "absolute", top:"50%", left:"50%", transform: "translate(-50%,-50%)"}}>
            <MUI.Stack alignItems="center" direction="column">
                <MUI.Typography marginTop="10px" alignSelf="center" variant="h4">Sign Up for Phorm: </MUI.Typography>
                <MUI.TextField id="first-signup" sx={textFieldStyles} placeholder='First Name'></MUI.TextField>
                <MUI.TextField id="email-signup" sx={textFieldStyles} placeholder='Email'></MUI.TextField>
                <MUI.TextField id="username-signup" sx={textFieldStyles} placeholder='Username'></MUI.TextField>
                <MUI.TextField type="password" id="password-signup" sx={textFieldStyles} placeholder='Password'></MUI.TextField>
                <MUI.Stack sx={{width: "600px"}} justifyContent="space-around" direction="row">
                    <MUI.Button onClick={() => handleCancel()} sx={buttonStyles} variant="outlined">Cancel</MUI.Button>
                    <MUI.Button onClick={() => handleSignUp()} sx={buttonStyles} variant="contained">Sign Up</MUI.Button>
                </MUI.Stack>
            </MUI.Stack>
        </MUI.Container>
    )
}

export default SignUpModal