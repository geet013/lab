document.addEventListener("DOMContentLoader", event => {

    const app = firebase.app();
    console.log(app);
});



function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            const userName = user.displayName;
            document.write('Hello', "  ", userName);
            console.log(user.displayName);
        })
        .catch(console.log);

}