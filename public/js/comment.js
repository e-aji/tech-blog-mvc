const commentFormHandler = async (event) => {
        event.preventDefault();
    
        const content = document.querySelector('#comment-input').value.trim();

        const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    
        if (content) {
            const response = await fetch('/api/comment', {
                method: 'POST',
                body: JSON.stringify({ post_id, content }),
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