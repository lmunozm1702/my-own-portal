function validateEmail(email) {
    if (email === email.LowerCase() ){
        return true;
    } 
    return false;
}

//const form = document.querySelector("#contact-button");
const form = document.querySelector("#contactme");
console.log(form)

form.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(validateEmail('lmunozm1702@gmail.com'));
    console.log(validateEmail('l.Munoz.m@outlook.com'));
});
