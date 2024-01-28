Food Ordering App

Step - 1 : Get the API
Step - 2 : Cards (Rendering all the details on the card)
Step - 3 : Implement Serach Functionality
Step - 4 : Develop Sorting on the basis of Location, Rating
Step - 5 : Implement Filtering according to the tag
Step - 6 : Deveop the Fav icon


Breakdown the Steps
1. For fetching the Data
   1.1 getData() => fetch API
2. For cards
   2.1 getCard(restaurant) => return the html card
   2.2 generateView(listOfRes) => use getCard() and getall card and put the all cards into one div
3. Search
   3.1 SearchRes(query) => return filter data
4. Sorting
   4.1 SortBy(label) = > return a list in sorted way then again call the generateView();
5. Tag
   5.1 filter(tag) => return a list of res object thena again call generatedView().
6. Faviourate
   6.1 For maintaing the Fav item to use LocalStorage
   6.2 markFav() => Using EventBubbling/Capturing

Impress the Interviewer : 
1. Writing the EventBubbling/Capturing
2. Using debouncing - Optimizing the performnce of the web page(__dbounce)
3. Make a Code Scabable : Try to implement pagination
4. Use ES6
5. Responsiveness