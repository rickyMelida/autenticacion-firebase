//signup
const signupForm = document.querySelector('#sigup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#signup-email').value;

    const password = document.querySelector('#signup-password').value;

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            signupForm.reset();

            $('#signupModal').modal('hide');
            console.log('signup');
        });
}); 

//signin

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            loginForm.reset();

            $('#signinModal').modal('hide');
            console.log('signin');
        });
});

const logout = document.querySelector('#logout');

logout.addEventListener('click', (e)=>{
    e.preventDefault();
    // Eliminamos la sesion de firebase
    auth.signOut().then(()=>{
        console.log('sign out');
    })
})