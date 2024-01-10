
const returnHome = () => document.location.replace('/');
document.querySelector('#home').addEventListener('click', returnHome);

const getLogin = () => window.location.replace('/login');
document.querySelector('#login').addEventListener('click', getLogin);
const getPost = (event) => {
    const id = event.target.getAttribute("id");
    window.location.replace(`/post/${id}`)
};
const postHEL = document.querySelectorAll('.card-header');

postHEL.forEach(post => post.addEventListener('click', getPost))