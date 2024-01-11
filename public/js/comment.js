
const showForm = (event) => {
    event.preventDefault();
    const formEL = document.querySelector('.form')
    if (formEL.getAttribute('id') == 'hidden') {
        formEL.setAttribute('id', 'visible');
        // document.querySelector('comm-button').value
        // console.log()
    } else {
        formEL.setAttribute('id', 'hidden');
    }
}
if (document.querySelector('#comm-button')) {
    document.querySelector('#comm-button').addEventListener('click', showForm);
}

const addComment = async (event) => {
    event.preventDefault();
    const text = document.querySelector('#comm-text').value.trim();
    const post_id = document.querySelector('.card-header').getAttribute('id');
    // console.log(text, postID);

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
document.querySelector('#post-createBtn').addEventListener('click', addComment);