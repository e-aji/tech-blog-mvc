// edit post 
const editButtonHandler = async (event) => { 
    event.preventDefault();

    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();

    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, body }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace(`/post/${id}`);
    } else {
        alert('Failed to update post');
    }

}

document
.querySelector('.edit-post-form') 
.addEventListener('submit', editButtonHandler);