import {
    SIGNIN,
    VERIFY,
    SIGNOUT,
} from './actionTypes';

import firebase from '../firebase';
import { storage } from '../firebase';

import { 
    signUp as singUpService,
    signIn as singInService,
    verifyUser
} from '../services/userService';

export const signInSuccess = (userData) => ({
    type: SIGNIN,
    payload: userData,
})

export const signOutSuccess = () => ({
    type: SIGNOUT,
})

export const verify = () => ({
    type: VERIFY,
})

export const signUp = (data, profileImageFile) => async (dispatch) => {
    
    const response = await singUpService(data);
    const responseJSON = await response.json();

    const ref = storage.ref(responseJSON._id + "/" + data.profileImage);
    
    await ref.put(profileImageFile);

    if (responseJSON.error) {
        return { error: responseJSON.error };
    } else {
        return responseJSON;
    }
}

export const verifyAuth = () => (dispatch) => {
    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            
            const uid = user.uid;
            const idToken = user.za;
            const response = await verifyUser(uid, idToken);

            const userData = await response.json();

            if(userData._id) {
                userData.idToken = idToken;
                dispatch(signInSuccess({user: userData}));
            }
        } else {
            dispatch(verify());
        }
    });
}

export const signIn = (email, password) => async (dispatch) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(firebaseRes => {
                const uid = firebaseRes.user.uid;
                const idToken = firebaseRes.user.za;

                return singInService(uid, idToken);
            })
            .then(res => res.json())
            .then(user => {
                const ref = storage.ref(user._id + "/");
                var storageRef = ref.child(user.profileImage);

                storageRef.getDownloadURL()
                    .then(profileImgUrl => {
                        user.profileImage = profileImgUrl;

                        return dispatch(signInSuccess({ user }));
                    })
                    .catch(console.log)
            })
            .catch(err => {
                return err;
            });
    
}

export const signOut = () => async (dispatch) => {
    console.log('sign out');
    
    await firebase.auth().signOut();
    dispatch(signOutSuccess());
}
