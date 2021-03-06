// Start at `let articles`

class Article {
  constructor(element) {
    // assign this.element to the passed in article element
    this.element = element;
    // create a reference to the ".expandButton" class. 
    console.log(element);
    this.expandButton = element.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerHTML = 'expand';
    
    // Set a click handler on the expandButton reference (or article element), calling the expandArticle method.
    // this.expandButton.addEventListener('click',this.expandArticle.bind(this.element))
    this.expandButton.addEventListener('click',this.expandArticle.bind(this))
    
  }

  expandArticle(event) {
    // Using our reference to the article element, add or remove a class to expand or hide the article.
    // this.classList.toggle('article-open');
    this.element.classList.toggle('article-open');
    if (this.expandButton.innerHTML === 'expand') {
      this.expandButton.style.color= 'red';
      this.expandButton.style.textShadow = '1px 1px black';
      this.expandButton.style.fontSize = '18px';
      this.expandButton.innerHTML = 'close';

    }
    else {
      this.expandButton.innerHTML = 'expand'; this.expandButton.style.color = ''; this.expandButton.style.textShadow = '';
      this.expandButton.style.fontSize = ''; }
    // event.target.parentNode.classList.toggle('article-open');
  }
}

// START HERE: Select all classes named ".article" and assign that value to the articles variable
let articles = document.querySelectorAll('.article');

// Use .map() to iterate over the articles array and create a new instance of Article by passing in each article element as a parameter to the constructor.
articles = Array.from(articles).map( article => new Article(article));

