
//  func for Updating post
const updatePost = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-text').value.trim();
    console.log(name, text);
    const postID = document.querySelector('.form-head').getAttribute('id');
    // console.log(postID);

    const resp = await fetch(`/api/posts/${postID}`, {
        method: 'PUT',
        body: JSON.stringify({ name, text }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (resp.ok) {
        window.location.replace('/dashboard');
    } else {
        alert('Failed to update.');
    }
};

document.querySelector('#post-updateBtn').addEventListener('click', updatePost);


// func for Deleting post
const deletePost = async (event) => {
    event.preventDefault();
    const postID = document.querySelector('.form-head').getAttribute('id');
    const resp = await fetch(`/api/posts/${postID}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    });

    if (resp.ok) {
        window.location.replace('/dashboard');
    } else {
        alert('Failed to delete.');
    }
};

document.querySelector("#post-deleteBtn").addEventListener('click', deletePost);