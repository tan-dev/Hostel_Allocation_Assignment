import firebase from "../config/firebase-config";

const socailMediaAuth = (provider) => {
    return firebase.auth().signInWithPopup(provider)
        .then((respond) =>{
            return respond.user;
        })
        .catch((err) => {
            return err;
        })
}

export default socailMediaAuth;