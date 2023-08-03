import React from 'react'

import SplashPage from './components/SplashPage/SplashPage'
import Dashboard from './components/Dashboard/Dashboard'
import TopBar from './components/TopBar/TopBar'

import users from './mock_data/users.json'
import posts from './mock_data/posts.json'

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [user, setUser] = React.useState(null) //user is always either User | null where User: {first_name, email, user_name, password}
  const [userList, setUserList] = React.useState(users)
  const [postList, setPostList] = React.useState(posts)

  const defaultUser = { //
    first_name: "First",
    email: "emailaddress@site.com",
    user_name: "User",
    password: "password"
  }

  if(!isAuthenticated) {
    return(
      <SplashPage setUserList={setUserList} userList={userList} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
  )}
  else{
    return(
      <>
        <TopBar />
        <Dashboard postList={postList} userList={userList} user={user} />
      </>
  )}
}

export default App