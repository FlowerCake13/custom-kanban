# custom-kanban

Create a custom kanban board! A kanban board is a workflow visualization tool that enables you to optimize the flow of your work. Kanban in Japanese = "visual signal" or "card".

![Final Product Example](https://github.com/junior-devleague/custom-kanban/blob/master/example.jpg)

## Objective

Use **HTML Drag and Drop**, **JavaScript Functions**, and more to create a web kanban board.

## Prerequisites

To complete this project, students should have the following:
* Intermediate understanding of HTML structures.
* Basic understanding of CSS and Flexbox.
* Intermediate understanding of JavaScript and DOM (Variables, Functions, getElementById, appendChild, setAttribute, Event Handling)

## Concepts

DOM | Description
----|------------
DOM | Document Object Model. An application programming interface (API) for valid HTML and well-formed XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.
setAttribute(param1, param2) | Method that adds an attribute to an element (e.g. div.setAttribute('id', 'item')).
node.appendChild(node) | Appends a node as the last child of a node.

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* JS file
3. Link all of your files correctly.

### Part II HTML

To complete Part II, fulfill the following requirements:

1. Create a ```div``` with an ```id``` of "container". In this div, create the following:
  * ```div``` with ```class``` of "column" and ```id``` of "new".
    * ```h1``` with text of "New".
  * ```div``` with ```class``` of "column" and ```id``` of "progress".
    * ```h1``` with text of "In-Progress".
  * ```div``` with ```class``` of "column" and ```id``` of "done".
    * ```h1``` with text of "Done".

### Part III CSS

To complete Part III, fulfill the following requirements:
1. Target the ```body``` element.
  * Set the margin to 0px.
  * Set a background-image.
2. Target the ```h1``` element.
  * Set the padding to 20px.
3. Target the ```id``` of "container".
  * Set the height to the full view height.
  * Set the width to the full view width.
  * Activate flexbox.
  * Set the direction of elements to ROW using flexbox.
4. Target the ```class``` of "column".
  * Set the height to 100%.
  * Set the width to 33%.
  * Activate flexbox.
  * Set the direction of elements to COLUMN using flexbox.
  * Center items HORIZONTALLY using flexbox.
5. Target the ```class``` of "item". This will be the class for the newly appended items on our kanban board.
  * Set the max-width to 80%.
  * Set the height to auto.
  * Set the background-color to white (or another color depending on your background).
  * Activate flexbox.
  * Center items HORIZONTALLY using flexbox.
  * Center items VERTICALLY using flexbox.
  * Make the edges a little rounder (~2px). *What property controls the edges of an element?*
  * Set the bottom margin to 5px.
  * Set the padding to 10px.

### Part IV JS

To complete Part IV, fulfill the following requirements:

1. Create a ```variable``` called "newItem" that will store the element with id of "new".
2. Create a ```variable``` called "done" that will store the element with id of "done".
3. Create an ```onkeydown``` function on the ```document``` that takes ```event``` as a parameter.
  * Create an ```if statement``` that checks if the ```event``` keyCode property is equal to the code for the enter key ('13').  
    * If the enter key is pressed, create a ```variable``` called "input" that will store a ```prompt``` with text of "New:".
    * Call the function "appendItem" with the input variable as a parameter. We will be making the appendItem function now!
4. Create a ```function``` called "appendItem" that will take in a parameter called description. In this function, do the following:
  * Create a ```variable``` called "div" that will store a newly created div element.
  * Set the innerHTML of this div to the description.
  * Create a ```variable``` called "checkbox" that will store a newly created input element.
  * Use the ```setAttribute``` method on the checkbox and set its 'type' attribute to 'checkbox'.
  * Append the checkbox to the div.
  * Use the ```setAttribute``` method on the div and set its 'class' attribute to 'item'.
  * Append the div to the newItem container.
  * Add an ```Event Listener``` to your checkbox that listens for a 'change' (not a click). If something changes (someone checks the checkbox), append the div to the done container instead.
5. Prepare for drag and drop!
  * Allow drop in the containers -> In your HTML:
    * Make sure each New, In-Progress, and Done containers have the following attributes:
      * ondragover = "allowDrop(event)"
      * ondrop="drop(event)"
  * Make the cards draggable -> In your JS:
    * Before appending the div to the newItem container, make sure it has the following attributes (using the ```setAttribute``` method):
      * draggable = 'true'
      * ondragstart = 'drag(event)'
  * We also need to make sure each div has an id for our drag and drop to work.
    * Create a global variable called counter and set it equal to 0.
    * In your appendItem function, increment counter by 1.
    * Set the id attribute of the newly created div to counter.
6. Create a function called drag that will take in a parameter. This parameter will be the drag event so we can abbreviate it with e or ev as follows:
``` JavaScript
function drag(ev) {
  //more code goes in here!
}
```
This function will get information about the element we are holding and retrieve its ```id```.

``` JavaScript
function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}
```

Since ```ev``` is a placeholder for our drag event, we will get information about the element being dragged when a drag is triggered. How do we know which element that is? Well, we will grab the ```id``` of our ev.target (the element that fires off the drag event) and set that to a text data type so we can retrieve it later.

7. Create a function called allowDrop that will take in an event as a parameter. By default, we cannot drag elements into other elements (try it!). So, we need to prevent the default functions from running. Fortunately, the event object already has a method called ```preventDefault()``` to help us with that. Call the preventDefault method from the event parameter. *Hint: How do we usually call methods from objects?*

8. Create a function called drop that takes in an event as a parameter. When we drop the element, we want to append the element we are dragging onto the drop space.
* Create a variable ```data``` that will store the element we are holding. We can do that by using ```ev.dataTransfer.getData('text')```. Remember how we stored our element's id into that?
* Now, that we have the id, use the ```appendChild``` method to append our draggable element onto the element we want it to be dropped in. *Hint: Use ```ev.target```, ```appendChild``` and ```document.getElementById()```!*

Resource: https://www.w3schools.com/html/html5_draganddrop.asp

## Stretch Goals
1. If there are a multiple of 5 things in your done container, give yourself some points!
  * Keep track of how many items are in the done container.
  * If it is a multiple of 5, increment a point variable.
  * Display the points somewhere on your kanban board.
2. Style your kanban! 
