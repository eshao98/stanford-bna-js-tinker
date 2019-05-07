## Javascript learning exercise
Elena Shao  
COMM 177T: Building News Applications

### Introduction
The skill I set out to learn is to better familiarize myself with working with JavaScript event handlers, as well as using the `addEventListener()` function. Drawing from a problem area I encountered while building my portfolio website, I decided to specifically figure out how to have an image pop-up upon mouse hover over a link. 

My old solution to this issue involved using the `a:hover` selector a link within the CSS. This did not provide enough flexibility with the positioning or speed of the transition that I wanted. 

Specifically, I hoped that the task that I hoped to accomplish would include:

* an image pop-up on mousehover over a link
* while mousehover, image would follow/trail mouse movement 
* smooth, fade-in transition
* accomplish task using Vanilla JavaScript (no jQuery library)

### Process
I have never really worked with JavaScript before at all, so I first continued finishing the [Learn Enough JavaScript to Be Dangerous](https://www.learnenough.com/javascript-tutorial/hello_world) tutorial, using [W3Schools' JS Events tutorial](https://www.w3schools.com/js/js_events.asp) to supplement the "Events and DOM Manipulation" section (Chapter 9). The most useful tip from these resources was to reserve `div id` for JS applications (such as events), and to use `div class` for CSS. These two resources, a little bit of StackOverflow to debug, and Mozilla Developer Network's `onmouseover` event handler documentation were sufficient to create the foundation: an image would pop up when the mouse hovered over a link, and disappear once the cursor left the link.  

```javascript
var link = document.getElementById("link"),
img = document.getElementById("img");

link.onmouseover = function(){
  img.style.display = "block";
}

link.onmouseout = function(){
  img.style.display = "none";
}
 ```
However, this image hover was too abrupt, and thinking ahead to how best to integrate this task into my website, I hoped to figure out how to adjust the image hover so that it would "follow" or "trail" the mouse movement, but only while the cursor hovered over the link. This was a good opportunity to learn how to use the `addEventListener()` function for the [mousemove](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event) event (as opposed to inline JavaScript in HTML markup, which would have been similar to the original CSS-only method I used). 
I then created two functions, `getMousePosition()` and `trailMousePosition` to manage and track the position of the mouse cursor (and the image that trails it).

```javascript
// Event handling functions

// Takes in event e parameter; mouse movement is tracked
function getMousePosition(e){
  mouse.x = e.pageX;
  mouse.y = e.pageY;
}

// Image position on hover
function trailMousePosition(){
  // Setting up variables 
  var distanceX = mouse.x - position.x;
  var distanceY = mouse.y - position.y;
  position.x+=distanceX/10;
  position.y+=distanceY/10;

  // Manages how the image is positioned relative to mouse hover
  hover.style.left = position.x + 100 + "px";
  hover.style.top = position.y + 100 + "px";

  hover_image.setAttribute("class", "move")
}

// Smooth out the transition, making it slower, "floaty"
setInterval(trailMousePosition, 50);
```


### Mastery
For this task, there were a few tutorials and examples online, but almost all were done using jQuery library. It was helpful to look at these to get an idea of what I would need to do, but the process of learning how to do it with pure JavaScript and trial and error (especially with the little bit of math needed) helped me learn the skill much better, potentially to the point where I could recreate this project from memory. While I do think that there are so many more complex things that can be done with event handlers, I think I got a good introduction to the basics that I can build upon to add even more interactivity to a project (most likely my portfolio website).

I particularly liked the task-oriented approach to learning. Going through full tutorials was useful to get a sense of what is possible with JS as well as the syntax, but actually implementing was more difficult than expected because I had to learn how to work it in with a CSS stylesheet (in this case, in the `<style>` block) and with the HTML markup as well. The best way to learn this is through actually working towards accomplishing a task. In this sense, I think I was able to get a better grip on the workflow.
