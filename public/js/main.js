// const { response } = require("express");

const returnHome = () => document.location.replace('/');
document.querySelector('#home').addEventListener('click', returnHome);

const getLogin = () => window.location.replace('/login');
document.querySelector('#login').addEventListener('click', getLogin);
const getPost = (event) => {
    const id = event.target.getAttribute("id");
    window.location.replace(`/post/${id}`)
};

const postHEL = document.querySelectorAll('.card-header');

postHEL.forEach(post => post.addEventListener('click', getPost));

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

document.querySelector('#logout').addEventListener('click', logout);


const dashboard = () => window.location.replace('/dashboard');

document.querySelector('#dashboard').addEventListener('click', dashboard);

