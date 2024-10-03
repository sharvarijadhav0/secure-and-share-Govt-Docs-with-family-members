//SIGNIN LOGIC BY FIREBASE AND JS



async function signup(e){
    e.preventDefault()
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    const message = document.querySelector("#message")
    console.log(email.value, password.value)

    try{
    const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    

    console.log(result);
    message.textContent = `welcome ${email.value} `;
       message.style.color = "green"
       var timer = setTimeout(function() {
        window.location='login.html'
    }, 2000);

    }

    catch(err){
        console.log(err)
        message.textContent = err.message;
       message.style.color = "red"
    }
    email.value = ""
    password.value = ""



}
//LOGIN LOGIC BY FIREBASE AND JS


  

async function signin(e){
    e.preventDefault()
    const email = document.querySelector("#loginemail")
    const password = document.querySelector("#loginpassword")
    const message = document.querySelector("#mess")
    console.log(email.value, password.value)

    try{
    const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)

    console.log(result);
    message.textContent = `welcome ${email.value} `;
       mess.style.color = "green"
       var timer = setTimeout(function() {
        window.location='doc.html'
    }, 2000);
       

    }

    catch(err){
        console.log(err)
        message.textContent = err.message;
       mess.style.color = "red"

    }
    email.value = ""
    password.value = ""


}
//LOGOUT LOGIC BY FIREBASE AND JS

function logout(){
    const signoutsuccess = document.querySelector("#signoutsuccess")
    firebase.auth().signOut()
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user)
        } else {
          console.log("signout success")
          signoutsuccess.textContent = "logout successful"
          signoutsuccess.style.color = "green"


        }
      });
}

