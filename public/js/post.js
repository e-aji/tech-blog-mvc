// create post 
const newFormHandler = async (event) => { 
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    
    if (title && body) {
      console.log(title, body);
      const response = await fetch(`/api/post`, 
      {
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
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');;
      } else {
        alert('Failed to delete post');
      }
    }
  };
  


document
.querySelector('.new-post-form') 
.addEventListener('submit', newFormHandler);

document
.querySelector('.post-list') 
.addEventListener('click', delButtonHandler);

