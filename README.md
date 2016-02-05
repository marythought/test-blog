# TODOs
- get filters working
- make navbar Hamburger
- add non cdn jquery


# Class 1

Technical Requirements and Grading Rubric

1. ✅Use good Object Oriented code: Create a blog object, and a constructor function for articles.
- ✅ Leave as little in the window (global) namespace as possible: attach functions to objects, etc.
- ✅ Create the markup for an example Article in the DOM, then use jQuery to clone that for each article.
- ✅ Your Article prototype should have a .toHtml() function that adds new data to the DOM.
- ✅Add basic styles: a css reset, content in a single centered column, reasonable margins, etc.

# Class 2

## User Stories

1. ✅ As a reader, I want articles truncated to the first paragraph so that I can easily scroll though the whole list.
- ✅As a reader, I want to click the "Read On" button so that I can see the entire article.
- ✅As an author, I want my articles filtered by name so that readers can find all my posts.
- ✅As a reader, I want articles filterable by category so that I can read things that interest me.
- ✅As the creator, I want the About nav to act as a tab, so my story is revealed FAST.
- ✅As a reader, I want the blog to use a little color, so that I can distinguish it from other pages.

## Technical Requirements and Grading Rubric

- Use event delegation whenever appropriate.
- Make sure you aren't showing articles that are unpublished ("draft").
- Add your filters to the Nav section.
- Factor out any helper functions to a Util object, perhaps in a util.js file.
- Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
- When classes and IDs are needed, pick semantic names. There is to be no $('#content .content') nonsense!
- When one filter is selected, it should reset the other filter (eg: it should not AND them).
- Add color and icons where appropriate.
