export const signup = (firebaseUserInfo) => dispatch => {
  dispatch({ type: 'SIGNUP_REQ_START'})
    fetch(`api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: firebaseUserInfo
      })
    }
  )
  .then(res => res.json())
  .then(user => {
    console.log("signup data:", user);

    if(user) {

      dispatch({ 
        type: "SIGNIN_SUCCESS", 
        user: user
      })
    }
  })
}

export const getCurrentUser = (currentUser) => dispatch => { 

  dispatch({ type: "PROFILE_REQUEST_START" })

  fetch(`api/profile`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user: currentUser
    })
  })
  .then(res => res.json())
  .then(user => {
    dispatch({
      type: "PROFILE_SUCCESS",
      user: user
    })
  })
}
