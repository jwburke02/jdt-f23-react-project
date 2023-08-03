import React from 'react'
import * as MUI from '@mui/material'

import SignUpModal from './SignUpModal'
import LogInModal from './LogInModal'

import { buttonStyles } from '../../constant'

function SplashPage({setIsAuthenticated, setUser, userList, setUserList}) {
    const [logInOpen, setLogInOpen] = React.useState(false)
    const [signUpOpen, setSignUpOpen] = React.useState(false)

    return(
        <MUI.Paper>
            {!logInOpen && !signUpOpen ? 
                <MUI.Container sx={{width: "600px", height: "380px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <MUI.Stack direction="column">
                        <MUI.Typography marginTop="10px" alignSelf="center" variant="h2">
                            Welcome to Phorm!
                        </MUI.Typography>
                        <MUI.Stack justifyContent="space-around" direction="row">
                            <MUI.Button onClick={() => setSignUpOpen(true)} sx={buttonStyles} variant="outlined">Sign Up</MUI.Button>
                            <MUI.Button onClick={() => setLogInOpen(true)} sx={buttonStyles} variant="contained">Log In</MUI.Button>
                        </MUI.Stack>
                    </MUI.Stack>
                </MUI.Container>
            : !logInOpen && signUpOpen ? 
                <SignUpModal setUserList={setUserList} userList={userList} setUser={setUser} setIsAuthenticated={setIsAuthenticated} setSignUpOpen={setSignUpOpen} />
            :
                <LogInModal userList={userList} setUser={setUser} setIsAuthenticated={setIsAuthenticated} setLogInOpen={setLogInOpen} />
            }
        </MUI.Paper>
    )
}

export default SplashPage