
const showForm = (event) => {
    event.preventDefault();
    const formEL = document.querySelector('.form')
    if (formEL.getAttribute('id') == 'hidden') {
        formEL.setAttribute('id', 'visible');
        document.querySelector('')
    } else {
        formEL.setAttribute('id', 'hidden');
    }
}

document.querySelector('#comm-button').addEventListener('click', showForm);