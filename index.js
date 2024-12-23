const posts = [
    {
        id: 1,
        user: 'Lisa',
        location: 'Berlin, Germany',
        image: './assets/images/post-1.jpg',
        likes: 204,
        liked: false,
        comments: [],
        time: '2 hours ago'
    },
    {
        id: 2,
        user: 'Cody',
        location: '',
        image: './assets/images/post-2.jpg',
        likes: 119,
        comments: [' Great shot!', 'Love this!'],
        time: '4 hours ago'
    },
    {
        id: 3,
        user: 'Mayank',
        location: 'Dehradun, India',
        image: './assets/images/post-3.jpg',
        likes: 184,
        comments: ['Amazing view!', 'So peaceful!'],
        time: '9 hours ago'
    },
    {
        id: 4,
        user: 'Joey',
        location: 'Texas, USA',
        image: './assets/images/post-4.jpg',
        likes: 3684,
        comments: ['Incredible!', 'What a moment!'],
        time: '4 hours ago'
    },
    {
        id: 5,
        user: 'Rado',
        location: 'Goa, India',
        image: './assets/images/post-5.jpg',
        likes: 114,
        comments: ['Vacation goals!', 'Looks fun!'],
        time: '14 hours ago'
    }
    
];

function renderPosts() {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.innerHTML = `
            <div class="top">
                <div class="userDetails">
                    <div class="profilepic">
                        <div class="profile_img">
                            <img src="./assets/images/user-1.jpeg" alt="">
                        </div>
                    </div>
                    <h3>${post.user}<br><span>${post.location}</span></h3>
                </div>
                <div>
                    <span class="dot"><i class="fas fa-ellipsis-h"></i></span>
                </div>
            </div>
            <div class="imgBx">
                <img src="${post.image}" alt="post-${post.id}" class="cover">
            </div>
            <div class="bottom">
                <div class="actionBtns">
                    <div class="left">
                        <span class="heart" onclick="toggleLike(${post.id})">
                            <span>
                                <svg aria-label="Like" color="${post.liked ? 'red' : '#262626'}" fill="${post.liked ? 'red' : '#262626'}" height="24" role="img" viewBox="0 0 48 48" width="24">
                                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                                </svg>
                            </span>
                        </span>
                        <svg aria-label="Comment" class="_8-yf5" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24">
                            <path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47. 5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path>
                        </svg>
                    </div>
                    <div class="right">
                        <svg aria-label="Save" class="_8-yf5" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24">
                            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                        </svg>
                    </div>
                </div>
                <a href="#"><p class="likes">${post.likes} likes</p></a>
                <a href="#"><p class="message"><b>${post.user}</b> ${post.comments[0] || ''}</p></a>
                <a href="#"><h4 class="comments">View all ${post.comments.length} comments</h4></a>
                <a href="#"><h5 class="postTime">${post.time}</h5></a>
                <div class="addComments">
                    <div class="reaction">
                        <h3><i class="far fa-smile"></i></h3>
                    </div>
                    <input type="text" class="text" placeholder="Add a comment..." onkeypress="handleComment(event, ${post.id})">
                    <a href="#">Post</a>
                </div>
            </div>
        `;
        postContainer.appendChild(postElement);
    });
}

function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    post.liked = !post.liked; // Toggle the liked state
    post.likes += post.liked ? 1 : -1; // Increment or decrement likes
    renderPosts(); // Re-render posts to update the UI
}

function handleComment(event, postId) {
    if (event.key === 'Enter') {
        const post = posts.find(p => p.id === postId);
        const commentInput = event.target;
        const commentText = commentInput.value.trim();
        if (commentText) {
            post.comments.push(commentText); // Add the comment to the post
            commentInput.value = ''; // Clear the input
            renderPosts(); // Re-render posts to update the UI
        }
    }
}

document.addEventListener('DOMContentLoaded', renderPosts);

