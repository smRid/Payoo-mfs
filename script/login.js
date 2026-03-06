document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value;

    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;

    if(contactNumber.length === 11 && pin.length === 4){
        alert("Login Successfully.")
        window.location.assign("home.html")
    }else{
        alert("Login Failed.");
    }
})