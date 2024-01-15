import { articleData } from './data.js'

const featuredArticleContainer = document.getElementById('featured-article-container')
const articleContainer = document.getElementById('article-container')
const displayedPosts = document.getElementById('displayed-posts')
const viewMoreLink = document.getElementById('view-more-link')
const featuredArticle = articleData.find(article => article.isFeatured)
const nonFeaturedArticles = articleData.filter(article => !article.isFeatured)

if (featuredArticleContainer) {
    renderFeaturedArticle()
    renderNonFeaturedArticles()
} else {
    renderNonFeaturedArticles()
}

function renderFeaturedArticle() {
    featuredArticleContainer.innerHTML = `
        <img id="featured-article-img" src="${featuredArticle.image}" alt="featured article image">
        <div id="text-overlay-container">
            <p id="featured-article-date">${featuredArticle.date}</p>
            <h1 id="featured-article-title">${featuredArticle.title}</h1>
            <p id="featured-article-text">${featuredArticle.summaryText}</p>
        </div>
        `
}

function renderNonFeaturedArticles() {
    const nonFeaturedArticlesHTML = nonFeaturedArticles.slice(0, 3).map(article =>`
        <article class="sub-article-container">
            <img class="sub-article-img" src="${article.image}" alt="picture of image related to blog post">
            <p class="sub-article-date">${article.date}</p>
            <h2 class="sub-article-title">${article.title}</h2>
            <p class="sub-article-text">${article.summaryText}</p>
        </article>
        `
    ).join('')

    articleContainer.innerHTML = nonFeaturedArticlesHTML
}

viewMoreLink.addEventListener('click', function() {
    viewMoreLink.style.display = ('none')
    const revealMorePosts = nonFeaturedArticles.slice(0, 6).map(article =>`
    <article class="sub-article-container">
        <img class="sub-article-img" src="${article.image}" alt="picture of image related to blog post">
        <p class="sub-article-date">${article.date}</p>
        <h2 class="sub-article-title">${article.title}</h2>
        <p class="sub-article-text">${article.summaryText}</p>
    </article>
    `
    ).join('')

    articleContainer.innerHTML = revealMorePosts
})