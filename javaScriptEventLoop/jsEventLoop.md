# JavaScript Event Loop
## What is it and what does it do?
I've used JavaScript for about two years now and have had a lot of fun buildilng things. 

One area that I'm somewhat weak/light on knowledge is how JavaScript actually works; stay with me here. 

Like a lot of developers, we learn as we code or as we work on certain projects, we pick up new skills and knowledge about JavaScript.

Now, this is all fine and dandy, but my curious/OCD brain doesn't like to just "use" something without knowing how it works. 

I don't mean that I intend to completely understand everything about JavaScript; if there's one thing I've learned about software development, and especially JavaScript, is that you are **always** learning. 

## So let's get into it: the Event Loop
The JavaScript **event loop** is an abstract concept that take's some basic definitions to really break down. 
- **Javascript runtime** - where your JavaScript code is excecuted. There are a lot of examples such as (v8, Node, spidermonkey etc.) which we'll get into later.
  - The **runtime** consists of: the **heap** and the **call stack** or stack.
    - A **heap** is a simply where **memory allocation** happens

    - A **call stack** is where your actions (function, logs, events,etc.) queued (what's being executed)
      - In other words - it's a data structure that records where in the program/app we are.
  - Back to some of those **runtime examples**. You've probably heard **v8** or the **v8 engine** thrown around and wondered what that is - I know I did.

    - **v8** or the **v8 engine** is Google Chrome's **JavaScript runtime**. You'll often here **engine** and **runtime** used interchangably (`engine === runtime`) 

- So now that we have a few definitions down, we can get into the different pieces that make up the event loop.

### **The Call Stack**
- Since JavaScript is a **single-threaded** language, that means it can only do **one thing at a time**
- This also means that it has **only ONE call stack**
  - Ex. When you call a function, it pops onto the stack, when something is `returned` or the function is complete, that function popped off the stack
  - Ex. (cont.) if you've ever returned a function with another function or looped through something incorrectly, you'll get a `RangeError: Maximum call stack size exceeded` in your browser console. 

- The **call stack** can be **"blocked"** or what is know as **"blocking"**, when things are slow. 
  - Ex. If you were to make numerous synchronous (one at a time) requests, they would one-by-one be added to the **call stack** and remain on the call stack until each is completed.
    - Assuming we're making these requests in the browser, the page is **rendered unresponsive** until those requests are cleared off the stack. The page will still register click events, keydowns, etc., however they **won't get executed** until the requests are completed.
    - What's the best way to get around this **blocking the call stack** issue are **asynchronous callbacks** (a callback function we can run later, such as a callback function in the `setTimeout` snippet below).

        ```javascript
        console.log('hi');

        setTimeout(function cb(){
            console.log('there');
        }, 2000);

        console.log('dude');
        ```
    - In the above example, we would get `hi`, then `dude`, and finally `there`. What's significant is that after the `setTimeout` function executes, it's no longer on the **call stack**, however **we still get the `console.log(there)`** in the console.
    - HOLD UP, how is this possible?
    - This is where we put our big girl pants on and look at the **magic of the event loop**.

## Concurrency and the Event Loop
- So, although JavaScript is single-threaded and it's runtime can only do one thing at a time, **the browser gives us the power to do more**.

- The browser gives us some WebAPIs (DOM, AJAX, setTimeout) that we can use to do things in concurrency (at the same). You can also think of these WebAPIs as threads, while we can't access them in the runtime, we can ask them to do things for us.

- Going back to the `setTimeout` example, once the `setTimeout` is executed, the delay of 2 seconds gets sent to the webAPI to run for 2 seconds and **is popped off the call stack**.
     ```javascript
        console.log('hi');

        setTimeout(function cb(){
            console.log('there');
        }, 2000);

        console.log('dude');
    ```
- Once the timer has run for 2 seconds, he callback function `cb()` is sent from the WebAPI to the **task queue**.
  - The task queue is a queue for the call stack.
  - Now, how does it go from the task queue to the call stack?? 

  ### This is where the **event loop** comes in! 
  - The event loop kicks a task(s) from the **task queue** to the **call stack**.
  - It's important to note that this **only happens once the call stack is clear**.

  - Keeping that thought in mind, we can use `setTimeout` with ZERO delay to kick that callback to the **webAPI** and then immediately over to the **task queue**
  ```javascript
  console.log('hi');

  setTimeout(function cb(){
      console.log('there');
  }, 0);

  console.log('dude);

  ```
  - Essentially what we're doing here is deferring the execution of the callback until the **call stack** is clear.


This idea of defering execution is how AJAX and other network calls work. 
- Once the request is made, the XHR webAPI takes over, once it completes (if it completes,) and it gets sent to the **task queue**, which is then picked up by the **event loop** and thrown onto the **call stack** once it's clear.
    ```javascript
    console.log('hi');

    $.get('url', function cb(data){
        console.log(data);
    });
    console.log('there');
    ```

### The importance of concurrency/being able to do things asychronously in the browser can **NOT** be understated.
- If you don't use asynchronous callbacks, you run the risk of **blocking the call stack**, which prevents the browser from refreshing or **"repainting"** the screen.










