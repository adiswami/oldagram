const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const containerFeed = document.querySelector(".container-feed")


function renderPosts() {
        let postContent = ""
        for (let i=0; i<posts.length; i++) {
         postContent +=
            `
                <section class="post">
                    <div class="post-user-info">
                        <img class="post-user-avatar" src=${posts[i].avatar} alt="Avatar of ${posts[i].name}">
                        <div class="post-user-details">
                            <p class="post-user-fullname">${posts[i].name}</p>
                            <p class="post-user-location">${posts[i].location}</p>
                        </div>
                    </div>
                    <img class="post-img" src=${posts[i].post} alt="Selfie of ${posts[i].name}">
                    <div class="post-body">
                        <div class="container-icons">
                            <button class="post-icon-btn" aria-label="Like post">
                                <img class="post-icon icon-heart" src="images/icon-heart.png" alt="">
                            </button>
                            <button class="post-icon-btn" aria-label="Comment on post">
                                <img class="post-icon icon-comment" src="images/icon-comment.png" alt="">
                            </button>
                            <button class="post-icon-btn" aria-label="Direct message">
                                <img class="post-icon icon-dm" src="images/icon-dm.png" alt="">
                            </button>
                            </div>
                        <p class="post-like-count">${posts[i].likes} likes</p>
                        <p class="post-content">
                            <span class="post-username">${posts[i].username}</span>
                            <span class="post-headline">${posts[i].comment}</span>
                        </p>
                    </div>
                </section>
            `
        }
    containerFeed.innerHTML = postContent
}

renderPosts()
