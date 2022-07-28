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
        const div = document.createElement("div");
        div.classList.add("portfolio-card");
        div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">View Project  <i class="fa-solid fa-arrow-right"></i></a>
        `;
        portfolio.appendChild(div);
    }
}
loadPosts();

const loadMore = document.getElementById("load-more-btn");

function loadDuePosts(e) {
    e.preventDefault();
    fetch("https://rakib0101.github.io/blog_json/v-card-portfolio.json")
        .then((res) => res.json())
        .then((data) => {
            displayDuePosts(data);
            loadMore.style.display = "none";
        });
}

function displayDuePosts(posts) {
    const slicePosts = posts.slice(0, 6);
    const portfolio = document.getElementById("portfolio");
    for (const post of slicePosts) {
        const div = document.createElement("div");
        div.classList.add("portfolio-card");
        div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">View Project  <i class="fa-solid fa-arrow-right"></i></a>
        `;
        portfolio.appendChild(div);
    }
}

loadMore.addEventListener("click", loadDuePosts);


// tab script

function tab(category) {
    fetch("https://rakib0101.github.io/blog_json/v-card-portfolio.json")
        .then((res) => res.json())
        .then((data) => {
            const filterData = data.filter((d) => d.portfolio_category === category);
            displayTabPosts(filterData);
        });
}

function displayTabPosts(posts) {
    document.getElementById("portfolio").style.display = "none";
    const portfolioTabImages = document.getElementById("portfolioTabImages");
    const portfolioTabPotrait = document.getElementById("portfolioTabPotrait");
    const portfolioTabWebDesign = document.getElementById("portfolioTabWebDesign");
    const portfolioTabMobileApp = document.getElementById("portfolioTabMobileApp");
    for (const post of posts) {
        if (post.portfolio_category === 'Images') {
            document.getElementById("portfolioTabImages").style.display =
                "grid";
            document.getElementById("portfolioTabPotrait").style.display =
                "none";
            document.getElementById("portfolioTabMobileApp").style.display = 'none';
            document.getElementById("portfolioTabWebDesign").style.display =
                "none";
            const div = document.createElement("div");
            div.classList.add("portfolio-card");
            div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">View Project  <i class="fa-solid fa-arrow-right"></i></a>
        `;

            portfolioTabImages.appendChild(div);
        }
        if (post.portfolio_category === "Potrait") {
            document.getElementById("portfolioTabPotrait").style.display =
                "grid";
             document.getElementById("portfolioTabWebDesign").style.display =
                 "none";
             document.getElementById("portfolioTabMobileApp").style.display =
                 "none";
             document.getElementById("portfolioTabImages").style.display =
                 "none";
            const div = document.createElement("div");
            div.classList.add("portfolio-card");
            div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">View Project  <i class="fa-solid fa-arrow-right"></i></a>
        `;

            portfolioTabPotrait.appendChild(div);
        }
        if (post.portfolio_category === "Web Design") {
            document.getElementById("portfolioTabWebDesign").style.display =
                "grid";
             document.getElementById("portfolioTabImages").style.display =
                 "none";
             document.getElementById("portfolioTabMobileApp").style.display =
                 "none";
             document.getElementById("portfolioTabPotrait").style.display =
                 "none";
            const div = document.createElement("div");
            div.classList.add("portfolio-card");
            div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">View Project  <i class="fa-solid fa-arrow-right"></i></a>
        `;

            portfolioTabWebDesign.appendChild(div);
        }
        if (post.portfolio_category === "Mobile App") {
            document.getElementById("portfolioTabMobileApp").style.display =
                "grid";
             document.getElementById("portfolioTabWebDesign").style.display =
                 "none";
             document.getElementById("portfolioTabImages").style.display =
                 "none";
             document.getElementById("portfolioTabPotrait").style.display =
                 "none";
            const div = document.createElement("div");
            div.classList.add("portfolio-card");
            div.innerHTML = `
            <div class="portfolio-card__feature-image">
                <a href="singlePortfolio.html"><img src=${post.portfolio_feature_img} /></a>
            </div>
            <div class="portfolio-card__meta">
                <p>${post.portfolio_category}</p>
            </div>
            <h2 class="portfolio-card__title"><a href="singlePortfolio.html">${post.portfolio_title}</a></h2>
            <a class="portfolio-card__btn " href="singlePortfolio.html">View Project  <i class="fa-solid fa-arrow-right"></i></a>
        `;
            portfolioTabMobileApp.appendChild(div);
        }
        
    }

}
