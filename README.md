# TODOs
- make navbar Hamburger
- Add linkedin icons
- only truncate articles longer than 1 paragraph

## User Stories and Goals:

# Class 1: jQuery and the DOM
1. ✅Use good Object Oriented code: Create a blog object, and a constructor function for articles.
- ✅ Leave as little in the window (global) namespace as possible: attach functions to objects, etc.
- ✅ Create the markup for an example Article in the DOM, then use jQuery to clone that for each article.
- ✅ Your Article prototype should have a .toHtml() function that adds new data to the DOM.
- ✅Add basic styles: a css reset, content in a single centered column, reasonable margins, etc.

# Class 2: jQuery and Events
1. ✅ As a reader, I want articles truncated to the first paragraph so that I can easily scroll though the whole list.
- ✅As a reader, I want to click the "Read On" button so that I can see the entire article.
- ✅As an author, I want my articles filtered by name so that readers can find all my posts.
- ✅As a reader, I want articles filterable by category so that I can read things that interest me.
- ✅As the creator, I want the About nav to act as a tab, so my story is revealed FAST.
- ✅As a reader, I want the blog to use a little color, so that I can distinguish it from other pages.

# Class 3: Mobile-First / Responsive Design and SMACSS
1. ✅As a visitor, I want the images to be responsive, so that content stays properly proportioned.
- ✅As a visitor, I want the viewport properly sized, so that content fits all the size I have available.
- As a visitor, I want the primary nav to be responsive, so that I can get around using any device.

# Class 4: Templates and Typography
1. ✅As a developer, I want to use Handlebars for my project template, so that I can include new projects more easily.
- ✅As a developer, I want my CSS styles to follow SMACSS organization, so that I know where to look for creating and editing styles.
- ✅As a visitor, I want the site to use great typography, so that I have an enjoyable reading experience.

# Class 5: Article Writer
1. ✅As an author, I want a URL where I can go write articles
- ✅As an author, I want a form fields for all the article properties, so that I can customize each aspect of my article.
- ✅As an author, I want to write in Markdown, so that I can easily control formatting.
- ✅As an author, I want an export of the final article, so that I can paste it into blogArticles.js to publish it.
- ✅As an author, I want a live preview of how my post looks, so that I know if I screw up the markdown.
- ✅As an author, I want code samples to have syntax highlighting, so that my readers see code as it should appear.

# Class 6: AJAX and JSON
1. ✅As a developer, I want to store my project data in a .json file, so that I can keep it organized.
- ✅As a developer, I want to retrieve that source data file asynchronously, so that my app logic gets the data just when I need it.
- ✅As a reader, I only want to have to fetch data when it's updated (and keep it cached locally), so that I don't make unneeded AJAX calls.

# Class 7: Functional Programing
1. ✅Eliminate all for loops.
- ✅Use map where you are transforming one collection into another.
- ✅Enclose the contents of each script file in an IIFE, that exports any interface methods.
- ✅Use templates to avoid repetition of HTML structure. Use map to convert collections of data into collections of DOM nodes.
- ✅Create an "admin" page with stats. Try reduce.

# Class 8: Intro to SQL
1. As a developer, I want article data to persist with SQL, so that I can store more, faster and have more query flexibility.
- As an author, I want to load an existing article in the editor with a special URL (editor/articles.html?id=42), so that I can see each component in a form.
- As an author, I want to save and export my edits to existing articles, so that my changes persist.
- As an author, I want an admin mode with an edit link on each article (index.html?admin=password).
- As an author, I want to have draft posts, so that I can save my writing without publishing.
- As a user, I want a user interface ("UI") that lets me show or hide all blog article images.
- As a user, I want a UI that lets to customize the appearance of the index page by selecting a "skin" (for example, try the demo at http://demos.telerik.com/radpagestylist/default.aspx and mouse-over/click varioius UI elements and observe color changes).
- As a user, I want at least one of the skins to apply a different set of font(s) and spatial layout to article elements (title, author, ...)
