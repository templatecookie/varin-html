function loadPosts() {
    fetch("https://rakib0101.github.io/blog_json/v-card-portfolio.json")
        .then((res) => res.json())
        .then((data) => {
            displayPosts(data);
        });
}

function displayPosts(posts) {
    console.log(posts);
    const slicePosts = posts.slice(0, 6);
    const portfolio = document.getElementById("portfolio");
    for (const post of slicePosts) {
        console.log(post);
        const div = document.createElement("div");
        div.classList.add("portfolio-card");
        div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singleBlog.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>Website</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singleBlog.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn" href="singlePortfolio.html">View Project</a>
        `;
        portfolio.appendChild(div);
    }
}
loadPosts();

const loadMore = document.getElementById("load-more-btn");

function loadDuePosts(e) {
    e.preventDefault();
    fetch("https://rakib0101.github.io/blog_json/v-card-blog.json")
        .then((res) => res.json())
        .then((data) => {
            displayDuePosts(data);
            loadMore.style.display = "none";
        });
}

function displayDuePosts(posts) {
    console.log(posts);
    const slicePosts = posts.slice(0, 6);
    const portfolio = document.getElementById("portfolio");
    for (const post of slicePosts) {
        console.log(post);
        const div = document.createElement("div");
        div.classList.add("blog-card");
        div.innerHTML = `
            <div class="blog-card__feature-image">
                <a href="singleBlog.html"><img src=${post.feature_img} /></a>
            </div>
            <div class="blog-card__meta">
                <p class="blog-card__meta-left">${post.blog_category}</p>
                <p class="blog-card__meta-right">${post.published_date}</p>
            </div>
            <h2 class="blog-card__title"><a href="singleBlog.html">${post.blog_title}</a></h2>
            <p class="blog-card__short-desc">${post.blog_short_desc}</P>
            <p class="blog-card__author">by <span>${post.author}</span></p>
            <a class="blog-card__btn" href="singleBlog.html">Read More</a>
        `;
        portfolio.appendChild(div);
    }
}

loadMore.addEventListener("click", loadDuePosts);
