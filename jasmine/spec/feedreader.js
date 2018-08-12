/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('url is defined', function(){
           //loop through individual feeds in allFeeds as defined in app.js 108:1
           for(let feed of allFeeds){
             //since feed is an object, we can access its url property
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           }
         });
         ///this test is very similar to the previous, but accessing the name property instead of url.
         it('name is defined', function(){
           for(let feed of allFeeds){
             expect(feed.name).toBeDefined();
             expect(feed.name.length).not.toBe(0);
           }
         });
    });

    describe('The Menu', function(){
       //we need to select the body element first, since the menu is shown by changing its class
       const body = document.querySelector('body'); //the body variable is placed here since it will be in the scope of both menu functions.
       const menu = document.querySelector('.menu-icon-link');

       it('is hidden', function(){
         //since the menu is shown and hidden with the 'menu-hidden' toggle on click, if it is hidden, the body must contain the class.
         expect(body.classList.contains('menu-hidden')).toBe(true);
       });

       it('responds to click', function(){
         //since menu-icon-link has a click handler we can use the click method to simulate the action, which toggles the body class 'menu-hidden'
         menu.click(); //on initial click, remove menu-hidden class
         expect(body.classList.contains('menu-hidden')).toBe(false);
         menu.click(); //on second click, add menu-hidden class back.
         expect(body.classList.contains('menu-hidden')).toBe(true);
       });

    });


    describe('Initial Entries', function(){
      beforeEach(function(done){ //done must be called in beforeEach before the test suite will run
        loadFeed(0, done); //in the loadFeed function in app.js, it calls for an entry id and a callback. Since there are no functions to call back to in this test, the code should finish executing.
      });
        const feed = document.querySelector('.feed');
        it('creates entries', function(){
          expect(feed.children.length > 0).toBe(true); //checks that there is at least one entry inside the feed div. 
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
      it('loads new feed', function(){

      });
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
    });

}());
