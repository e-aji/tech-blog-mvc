const commentFormHandler = async (event) => {
        event.preventDefault();
    
        const content = document.querySelector('#new-comment').value.trim();

        const post_id = event.target.getAttribute('post-id');
    
        if (content) {
            const response = await fetch('/api/comment', {
                method: 'POST',
                body: JSON.stringify({ post_id, comment_input }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                document.location.reload();
            } else {
                alert('Failed to create comment');
            }
        }
    };
  
 document.querySelector('.comment-form').addEventListener('submit', commentFormHandler)