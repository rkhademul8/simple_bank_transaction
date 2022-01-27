document.getElementById('login-submit').addEventListener('click',function(){
    // get user email
    const emailField=document.getElementById('user-email')
    const userEmail=emailField.value
    // get user password
    const passwordField=document.getElementById('user-password')
    const userPassword=passwordField.value
    // check email and password
    if(userEmail=='khademul@gmail.com' && userPassword=='1234'){
       window.location.href='banking.html'
    }
    else{
        alert('oh man !! check uername and password')
    }

})



