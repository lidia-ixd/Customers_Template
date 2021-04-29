function createUserRecord(id) {
  alert(id)
}



function createUser() {
  document.querySelector(".alert-success").style.display = 'none';
  document.querySelector(".alert-danger").style.display = 'none';

  var email = document.querySelectorAll('#email')[0].value; // selected by id 
  var password = document.querySelectorAll('#password')[0].value; // selected by id 

  document.querySelector(".alert-success").style.display = 'block';

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (result) {
    var user = firebase.auth().currentUser;
    document.getElementById("loginStatus").innerHTML = "New user id: " + user.uid;
    createUserRecord(user.uid);
  }).catch(function (error) {
    document.getElementById("loginStatus").innerHTML = "Error Message: " + error.message + "Error Code: " + error.code;
  });
}













function signIn() {
  document.querySelector(".alert-success").style.display = 'none';
  document.querySelector(".alert-danger").style.display = 'none';
  var email = document.querySelectorAll('#email')[0].value; // selected by id 
  var password = document.querySelectorAll('#password')[0].value; // selected by id 


  firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {
    document.querySelector(".alert-success").style.display = 'block';
    var user = firebase.auth().currentUser;
    if (user) {
      document.getElementById("loginStatus").innerHTML = "Signed in<br>User id: " + user.uid + "<br>Email: " + user.email;
    } else {
      document.getElementById("loginStatus").innerHTML = "NOT LOGGED IN ";
    }
  }).catch(function (error) {
    document.querySelector(".alert-danger").style.display = 'block';
    document.getElementById("errorInfo").innerHTML = "Error Message: " + error.message + "Error Code: " + error.code;
  });
}

function signOut() {
  document.querySelector(".alert-success").style.display = 'none';
  document.querySelector(".alert-danger").style.display = 'none';
  var user = firebase.auth().currentUser;
  firebase.auth().signOut().then(function (result) {
    document.querySelector(".alert-success").style.display = 'block';
    var user = firebase.auth().currentUser;

    if (user) {
      document.getElementById("loginStatus").innerHTML = "Signed in<br>User id: " + user.uid + "<br>Email: " + user.email;
    } else {
      document.getElementById("loginStatus").innerHTML = "NOT LOGGED IN ";
    }

  }).catch(function (error) {
    document.querySelector(".alert-danger").style.display = 'block';
    document.getElementById("errorInfo").innerHTML = "Error Message: " + error.message + " Error Code: " + error.code;
  });
}


function status() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var email = user.email;
      document.getElementById("statusInfo").innerHTML = "User is signed in using email: " + email;
    } else {
      document.getElementById("statusInfo").innerHTML = "No user is signed in.";
    }
  });
}

function createUserRecord(idValue){
  const _ref = firebase.firestore().collection('users').doc();
  customersCollection.doc(idValue).set({

      firstName: firstName.value,
      lastName: lastName.value,  
      emailAddress: emailAddress.value,
      pictureName: pictureName.value

    })
    .then(() => {
      console.log('User has been created successfully !')
      console.log('Customer Key: ' + idValue);
      window.location = "thankYou.html";
    })
    .catch(error => {
      console.error(error)
      window.location = "error.html";
    });



}