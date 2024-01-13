// func to hide or show Form for creating comment
const showForm = (event) => {
    event.preventDefault();
    const formEL = document.querySelector('.form')
    if (formEL.getAttribute('id') == 'hidden') {
        formEL.setAttribute('id', 'visible');
    } else {
        formEL.setAttribute('id', 'hidden');
    }
};
// event listener for  add comment button
if (document.querySelector('#comm-button')) {
    document.querySelector('#comm-button').addEventListener('click', showForm);
}

// func for adding new comment to choosen post and store it in DB
const addComment = async (event) => {
    event.preventDefault();
    const text = document.querySelector('#comm-text').value.trim();
    const post_id = document.querySelector('.card-header').getAttribute('id');

    if (text && post_id) {
        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({ text, post_id }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            window.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
// event listener for create comment btn
document.querySelector('#post-createBtn').addEventListener('click', addComment);