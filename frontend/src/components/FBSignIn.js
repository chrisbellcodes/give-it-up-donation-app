import React from 'react';

// Firebase Imports
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Redux Imports
import { connect } from 'react-redux'
import { signup } from '../redux/actions/userActions'



const config = {
  apiKey: "AIzaSyDPAODX6s3UhZGq84bqHlKgkShohth-MCQ",
  authDomain: "give-it-up-app.firebaseapp.com",
  projectId: "give-it-up-app",
  storageBucket: "give-it-up-app.appspot.com",
  messagingSenderId: "293077030612",
  appId: "1:293077030612:web:d730904aa7e468c3078d41",
  measurementId: "G-QD6NSR5K3T"
};

firebase.initializeApp(config);

function FBSignIn({signup}) {
  // console.log('redux user', user)




  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/cart',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInFailure: function(error) {
        // Some unrecoverable error occurred during sign-in.
        // Return a promise when error handling is completed and FirebaseUI
        // will reset, clearing any UI. This commonly occurs for error code
        // 'firebaseui/anonymous-upgrade-merge-conflict' when merge conflict
        // occurs. Check below for more details on this.
        return console.log({error});
      },
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: (authResult, redirectURL) => {
        var firebaseUserData = authResult.user;
        // var credential = authResult.credential;
        // var isNewUser = authResult.additionalUserInfo.isNewUser;
        // var providerId = authResult.additionalUserInfo.providerId;
        // var operationType = authResult.operationType;
        
        // console.log({firebaseUserData})

        signup(firebaseUserData)
        
      },

    }
  };

  return (
    <div>
      
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {
  signup: signup
}

export default connect(
      mapStateToProps,
      mapDispatchToProps
    )(FBSignIn)
