// Gets elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogIn = document.getElementById("btnLogIn");
const btnSignUp = document.getElementById("btnSignUp");
const btnLogout = document.getElementById("btnLogout");

//   Adds login event
btnLogIn.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //     Defines signin promise
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });
  //   Adds signup event
btnSignUp.addEventListener('click', e => {
  //       TODO: Check for real email
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();

  //     Defines signup promise
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});

// Adds a logout event listener
btnLogout.addEventListener('click', e => {
  firebase.auth().signOut();
});

//       Adds a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    console.log(firebaseUser.email);
    btnLogout.style.display = "inline";
    txtEmail.style.display = "none";
    txtPassword.style.display = "none";
    btnLogIn.style.display = "none";
    btnSignUp.style.display = "none";

    document.getElementById("info").innerHTML = `Email : ${firebaseUser.email}`;
  } else {
    console.log('not logged in');
    txtEmail.style.display = "inline";
    txtPassword.style.display = "inline";
    btnLogIn.style.display = "inline";
    btnSignUp.style.display = "inline";
    btnLogout.style.display = "none";
    document.getElementById("info").innerHTML = "<h1>Firebase Web Authentication Demo</h1>";
  }
})