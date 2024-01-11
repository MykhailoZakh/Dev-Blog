// const { response } = require("express");

const returnHome = () => document.location.replace('/');
document.querySelector('#home').addEventListener('click', returnHome);

const getLogin = () => window.location.replace('/login');
if (document.querySelector('#login')) {
    document.querySelector('#login').addEventListener('click', getLogin);
}
const getPost = (event) => {
    const id = event.target.getAttribute("id");
    window.location.replace(`/post/${id}`)
};

if (document.querySelector('.card-header')) {
    const postHEL = document.querySelectorAll('.card-header');
    postHEL.forEach(post => post.addEventListener('click', getPost));
}


const logout = async () => {

    const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        document.location.replace('/');
    } else {
        alert(res.statusText);
    }
};

if (document.querySelector('#logout')) {
    document.querySelector('#logout').addEventListener('click', logout);
}


const dashboard = () => window.location.replace('/dashboard');

document.querySelector('#dashboard').addEventListener('click', dashboard);

