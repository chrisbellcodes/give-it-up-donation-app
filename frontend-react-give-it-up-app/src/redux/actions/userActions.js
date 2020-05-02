
export const logIn = (email, password) => dispatch => {
  dispatch({ type: 'LOGIN_REQUEST_START'})
  fetch('http://localhost:3000/login', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    "email": email,
    "password": password
  })
}
)
.then(res => res.json())
.then(user => {
  if(user) {
      dispatch({
        type: "PROFILE_SUCCESS",
        user: user[0]
      })
    }
  })
}

export const signup = (first_name, last_name, email, password) => dispatch => {
  dispatch({ type: 'SIGNUP_REQ_START'})
  fetch('http://localhost:3000/signup', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password 
    })
  }
)
  .then(res => res.json())
  .then(user => {
    console.log("signup data:", user); 
    if(user) {
      dispatch({ 
        type: "PROFILE_SUCCESS", 
        user: user
      })
    }
  })
}
// Not needed because login and signup actions pull user data. 
// May need to refacter this to update user info after payment.
    // export const getCurrentUser = () => dispatch => { 
    //   dispatch({ type: "PROFILE_REQUEST_START" })
    //   fetch('http://localhost:3000/profile', {
    //     headers: {
    //         Authorization: `${localStorage.token}`
    //     }
    //   })
    //     .then(res => res.json())
    //     .then(user => {
    //       dispatch({
    //         type: "PROFILE_SUCCESS",
    //         user: user
    //       })
    //     })
    // }
