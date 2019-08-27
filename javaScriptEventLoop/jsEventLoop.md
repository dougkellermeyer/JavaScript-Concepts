# JavaScript Event Loop
## What is it and what does it do?
I've used JavaScript for about two years now and have had a lot of fun buildilng things. 

One area that I'm somewhat weak/light on knowledge is how JavaScript actually works; stay with me here. 

Like a lot of developers, we learn as we code or as we work on certain projects, we pick up new skills and knowledge about JavaScript.

Now, this is all fine and dandy, but my curious/OCD brain doesn't like to just "use" something without knowing how it works. 

I don't mean that I intend to completely understand everything about JavaScript; if there's one thing I've learned about software development, and especially JavaScript, is that you are **always** learning. 

## So let's get into it: the Event Loop
The JavaScript **event loop** is an abstract concept that take's some basic definitions to really break down. 
- **Javascript runtime** - where you JavaScript code is excecuted when you run it. There are a lot of examples such as (v8, Node, spidermonkey etc.) which we'll get into later.
  - The runtime consists of: the **heap** and the **callstack** or  **stack**.
    - I know, I know, more definitions...that's how it goes...

    - A **heap** is a simply where **memory allocation** happens
    - A **callstack** where your stack frames are (what's being executed)
  - Back to some of those runtime examples, you've probably heard **v8** or the **v8 engine** thrown around and wondered what that is - I know I did.
  - **v8** or the **v8 engine** is Google Chrome's **JavaScript runtime**. In other words `engine === runtime` 

- So now that we have a few definitions down, we can get into the different pieces that make up the event loop.






