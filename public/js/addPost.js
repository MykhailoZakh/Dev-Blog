// func for adding post to DB
const addPost = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-text').value.trim();
    // fetch for adding post to DB
    const resp = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({ name, text }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (resp.ok) {
        window.location.replace('/dashboard');
    } else {
        alert('Failed to create.');
    }
};
// event listener for create button
document.querySelector('#post-createBtn').addEventListener('click', addPost);
