const btnSend = document.querySelector('.content__main-btnsend');
const iconError = document.querySelector('.icon-error');
const errorMessage = document.querySelector('.error-message');

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const inputEmail = document.querySelector('#email').value;

function validate(inputEmail) {
    if(inputEmail.match(regex)) {
        console.log('123')
    }else {
        iconError.style.display = 'block';
        errorMessage.style.display = 'block';
        console.log('345')
    }
}
btnSend.addEventListener('click', () => {
    btnSend.classList.add('slide');
    validate(inputEmail);
})