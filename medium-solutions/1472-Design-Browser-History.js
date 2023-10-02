var WebPage = function(url, index) {
  this.url = url;
  this.next = null;
  this.prev = null;
  this.index = index;
}
/**
* @param {string} homepage
*/
var BrowserHistory = function(homepage) {
  const homePage = new WebPage(homepage, 0);
  this.curr = homePage;
  this.lastIndex = 0;
};

/** 
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function(url) {
  const newPage = new WebPage(url, this.curr.index + 1);
  newPage.prev = this.curr;
  this.curr.next = newPage;
  this.curr = newPage;
  this.lastIndex = this.curr.index;
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
  if (steps > this.curr.index) {
      steps = this.curr.index
  }

  for (let i = 0; i < steps; i++) {
      this.curr = this.curr.prev;
  }

  return this.curr.url;
};

/** 
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
  if (steps > this.lastIndex - this.curr.index) {
      steps = this.lastIndex - this.curr.index;
  }
  for (let i = 0; i < steps; i++) {
      this.curr = this.curr.next
  }

  return this.curr.url
};

/** 
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/