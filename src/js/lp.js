const inputNumber = document.getElementById('inputNumber');
const submitButton = document.querySelectorAll('.submit-button');
const checkMark = document.querySelector('.input-number__checkmark');
const formNumber = document.querySelector('.form-number');
const formPin = document.querySelector('.form-pin');
const pinInputs = document.querySelectorAll('.form-pin__input');
const pinFormLinks = document.querySelector('.form-pin__links-block')

let pinValue = ['','','',''];

const clearPinCode = () => {
    pinInputs.forEach(pinInput => {pinInput.value = ''});
    pinValue = ['','','',''];
}

const clearPinForm = () => {
    clearPinCode();
    submitButton[1].classList.add('submit-button--disabled');
    pinFormLinks.style.display = 'none';
}

pinInputs.forEach(pinInput => {
    pinInput.addEventListener('input', event => {
        event.target.value ? pinValue.splice(pinInput.id, 1, +event.target.value) : pinValue.splice(pinInput.id, 1, '');
        if (pinValue.every(value => typeof value === 'number')) {
            submitButton[1].classList.remove('submit-button--disabled');
            pinFormLinks.style.display = 'flex';
        } else {
            submitButton[1].classList.add('submit-button--disabled');
            pinFormLinks.style.display = 'none';
        }
    })
});

pinFormLinks.addEventListener('click', event => {
    let targetItem = event.target;

    if (targetItem.closest('#changePin')) {
        clearPinForm();
    }

    if (targetItem.closest('#changeNumber')) {
        clearPinForm();
        formPin.style.display = 'none';
        formNumber.style.display = 'block';
    }
})

Inputmask({'mask': '999-9999999'}).mask(inputNumber);
// based on codes from wikipedia - https://en.wikipedia.org/wiki/Telephone_numbers_in_Pakistan
const numberRegex = /^\+92(3(([0-4]\d)|(55)|(64))\d{7})|(0((2[12])|(4[0124589])|(5[123567])|(6[1248])|(71)|(8[16])|(91))\d{7})|(0(457)|(54[46])|(606)|(85[235])|(926)|(938)|(966)|(99[27])|([89]00)\d{6})$/;

const onPhoneInput = event => {
    let numberValue = '+92' + event.target.value.replace('-','');

    if (numberRegex.test(numberValue)) {
        submitButton[0].classList.remove('submit-button--disabled');
        checkMark.classList.remove('input-number__checkmark--disabled')
    } else {
        submitButton[0].classList.add('submit-button--disabled');
        checkMark.classList.add('input-number__checkmark--disabled')
    }
};

inputNumber.addEventListener('input', onPhoneInput);

const onNumberFormSubmit = event => {
    event.preventDefault();
    formNumber.style.display = 'none';
    inputNumber.value = '';
    formPin.style.display = 'block';
    submitButton[0].classList.add('submit-button--disabled');
    checkMark.classList.add('input-number__checkmark--disabled')
}

formNumber.addEventListener('submit', onNumberFormSubmit);

const onPinFornSubmit = event => {
    event.preventDefault();

    window.location.href = './home.html';
    clearPinForm();
}

formPin.addEventListener('submit', onPinFornSubmit);

