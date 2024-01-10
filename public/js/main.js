
const returnHome = () => document.location.replace('/');

document.querySelector('#home').addEventListener('click', returnHome);

const getPost = (event) => {
    const id = event.target.getAttribute("id");
    document.location.replace(`/${id}`)
};
const postHEL = document.querySelectorAll('.card-header');

postHEL.forEach(post => post.addEventListener('click', getPost))