
export const logIn = (firstName, password) => dispatch => {
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
    console.log('login data:', user)
      dispatch({
        type: "LOGIN_REQUEST_SUCCESS",
        user: user
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
  .then(data => {
    console.log("signup data:", data);
    
    if(data) {
      // localStorage.token = data.token
      dispatch({ type: "SIGNUP_REQ_SUCCESS" })
    }
  })
}

export const getCurrentUser = () => dispatch => { 
  dispatch({ type: "PROFILE_REQUEST_START" })
  fetch('http://localhost:3000/profile', {
    headers: {
        Authorization: `${localStorage.token}`
    }
  })
    .then(res => res.json())
    .then(user => {
      dispatch({
        type: "PROFILE_SUCCESS",
        user: user
      })
    })
}
