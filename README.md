# NYCsee


Making a fun play on the C / see in "NYC", this is an list-making app for Lynn's friends to suggest things for her to do and see while she is in NYC.

Users can suggest things to do, add specifics (ie websites or helpful info "only on Saturdays thru November")

##Project MVP
- CRUD app 
- allows users to suggest activities

###User Story
1. User will create an account on first visit:
    * screen name
    * email address 
    * password
2. Returning user will log in
3. User can create a new "idea" 
  * form for entering idea contains:
    * primary description of idea
    * category ( food / sightseeing / theatre / event / adventure) 
    * price range (0-5 stars, free => expensive) radio buttons (see example in Bookmarks)
    * amount of time required (quick, daytime, nightime, all day, overnighter) radio buttons
    * provide a web link (optional field)
    * other specifics (try the such and such drink)
4. Display all ideas
    * chronological list of ideas  
    * show completed activities
5. User can log out when desired (log out link)

##Technologies
For this project, I'll be using the following technologies:
- HTML
- CSS
- React
- Firebase
- Babel
- Webpack
- GitHub

##Next Steps
- determine most difficult piece - build and test
    * setting up all the database elements, displaying them in different ways
- sketch out wireframe on paper
- pseudocode 
- determine what database elements are needed
    * research different selection options (radio buttons, checkboxes, dropdowns)
- rough out the design (photoshop)
- rough out the css and html
- determine what React components will be needed, which have state

##Bonuses (random ideas, in no particular order)
- allows users to comment on activities
- add a randomizer for selecting the thing to do 
- users can attach a photo to their suggestion
- what if user forgets password? reset available? (may be included in firebase already?)
- users cannot delete info, but can they edit after submitting?
- experiment with Google or Facebook login ?
- gallery of photos from completed activities?
- allow users to vote on other ideas
    * display posts by most popular ideas (by user votes)
- filter by categories
- allow users to comment on another user's idea

##Can't get this to work
I'm trying to grab the friendlier "screenName" from the user's profile.
I can console.log it but can't figure out how to use it in the html

need to add edit (and delete) for original author, comment for other users
change favicon
screen name instead of email address
error messages? show on screen not just in console
add likes?
bounce in the C and see?
