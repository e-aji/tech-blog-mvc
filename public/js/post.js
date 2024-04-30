// create post 
const newFormHandler = async (event) => { 
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
  
    if (title && body) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create new post');
      }
    }
  };

// delete post
 const delButtonHandler = async (event) => { 
    
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');;
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
// edit post 
const editButtonHandler = async (event) => { 
 
    const id = event.target.getAttribute('data-id');
    const title = document.querySelector('#post-title').value.trim();
    const post_content = document.querySelector('#post-content').value.trim();

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, post_content }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/posts/${id}');
    } else {
        alert('Failed to update post');
    }

}

document
.querySelector('.new-post-form') 
.addEventListener('submit', newFormHandler);

document
.querySelector('#delete-btn') 
.addEventListener('click', delButtonHandler);

document
.querySelector('.edit-post-form') 
.addEventListener('submit', editButtonHandler);