
function showForm(type) {
    document.getElementById('registerForm').classList.add('d-none');
    document.getElementById('loginForm').classList.add('d-none');
    if (type === 'register') {
        document.getElementById('registerForm').classList.remove('d-none');
    }else if (type === 'login'){
        document.getElementById('loginForm').classList.remove('d-none');
    }
}


function register(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (!firstName){
        alert("Please Enter Your First Name");
        return;
    }
    if (!lastName){
        alert("Please Enter Your Last Name");
        return;
    }
    if (!email){
        alert("Please Enter Your Email");
        return;
    }
    if (!password){
        alert("Please Enter Your Password");
        return;
    }

    const user = {firstName, lastName, email, password}
    localStorage.setItem(email, JSON.stringify(user) )
    alert("Registration Successful! You can login.")


    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';

    showForm('login');


}

function login(){
    const email = document.getElementById('loginEmail').value;
    const inputPassword = document.getElementById('loginPassword').value;

    if(!email){
        alert("Email field is required")
        return;
    }
    if(!inputPassword){
        alert("Password field is required")
        return;

    }
    const user =localStorage.getItem(email)
    alert("You are Login")
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';


    if(!user){
        alert("You are not authentic user!")
        return;

    }


    const perseUser  = JSON.parse(user)
    if(inputPassword != perseUser.password){
        alert("Incorrect Password");
        return;

    }

}