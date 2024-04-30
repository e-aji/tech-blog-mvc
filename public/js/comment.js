const commentFormHandler = async (event) => {
        event.preventDefault();
    
        const post_id = document.querySelector('.comment-form').dataset.postid();

        const comment_input = document.querySelector('#comment-input').value.trim();
    
        if (comment_input) {
            const response = await fetch('/api/comments', {
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