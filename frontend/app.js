document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8055/items/posts')
      .then(response => response.json())
      .then(data => {
          const postsContainer = document.getElementById('posts');
          data.data.forEach(post => {
              const postElement = document.createElement('div');
              postElement.className = 'post';
              postElement.innerHTML = `
                  <h2>${post.title}</h2>
                  <p>${post.content}</p>
              `;
              postsContainer.appendChild(postElement);
          });
      })
      .catch(error => console.error('Error fetching posts:', error));
});