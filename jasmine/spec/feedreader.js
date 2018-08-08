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

    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function(){
       //we need to select the body element first, since the menu is shown by changing its class
       const body = document.querySelector('body'); //the body variable is placed here since it will be in the scope of both menu functions. 
       it('is hidden', function(){
         //since the menu is shown and hidden with the 'menu-hidden' toggle on click, if it is hidden, the body must contain the class.
         expect(body.classList.contains('menu-hidden')).toBe(true)
       });

       /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        //
        // it('responds to click' function(){
        //
        // });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    descsribe('Initial Entries', function(){
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
    });

}());
