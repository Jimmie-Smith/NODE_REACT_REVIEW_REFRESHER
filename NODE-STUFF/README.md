# Node and React Refresher Introduction

**This Section will serve as my personal library for Node JS and React Components as I'll need to reference them for future projects**

</br></br>

  <h2 style="text-align:center">Table of Contents</h2></br></br>

  - [<p style="text-align:center">Creating a Node Server</p>](#creating-a-node-server)
  - [<p style="text-align:center">Sending a Response in a Node Server</p>](#sending-a-response-in-a-node-server)
  - [<p style="text-align:center">Routing Requests in a Node Server</p>](#routing-requests-in-a-node-server)
  - [<p style="text-align:center">Parsing Data Sent From a Request</p>](#parsing-data-sent-from-a-request)
  - [<p style="text-align:center">Blocking and Non-Blocking Code</p>](#blocking-and-non-blocking-code)
  - [<p style="text-align:center">Using The Node Modules System</p>](#using-the-node-modules-system)</br></br>

********************************

</br>

### <p style="text-align:center">Creating a Node Server</p>

</br>

Within our Node.js application, we'll want to use the `require()` keyword. This keyword can take a path to another file, your own JS files, or a core module like <font color=green>**http**</font>. To start up a server in node, we will need to use <font color=green>**http**</font> in this case. It should look like this:

`const http = require('http');`

Notice how we assigned a const variable to our `require()` keyword. We will use this to reference our server later in the code.

Now we will to set a port for this server to listen on to receive request. it should look like this:

`const port = 3000;`

Notice again how we assigned a const variable to a number. This will indicate the <font color=lighblue>**port**</font> in which we will listen later in the code.

So now we're ready to create our server. Since <font color=green>**http**</font> is a core module within Node, it comes with a couple of built in functions, but the one we're going to focus on right now is the `createServer()` method. it should look like this:

`const server = http.createServer(req, res => {execute code here})`

Again, notice how we've assigned a const var to our newly created server. We will be using the <font color='lighblue'>**server**</font> variable to listen to the <font color='lighblue'>**port**</font> variable we created earlier in this section.

So now we're going to create a basic <font color=red>**Request**</font> and <font color=red>**Response**</font> to return when we access our server.

First off, the parament called *req* in our callback functions reference the request information that we're making to the server. This will tell us information about the request we're making to the server (What machine and OS they're using, headers, the type of browser they're using etc.). For now we're just going to send the <font color=lightblue>**req**</font>.<font color=lightblue>**url**</font> in a <font color=lighblue>**console**</font>.<font color=gold>**log**</font>() method. It should look like this:

`const server = http.createServer(req, res => {console.log(req.url)})`

That should do it for creating a server to deployed in our local environment. Now we want to listen to our port for any request that comes through. The final piece of code should look like this:

`server.listen(port);`

For this piece of code, we don't need to assign it to a variable, we just use the `listen()` method and, put in our <font color=lighblue>**port**</font> variable as an argument!

After that, we can run our code by going into our terminal and running:

<font color=gold>**node**</font> *****(path/to/your/file)***.js**

You're server should be listening and ready to receive commands. You can acc server by going to <font color=lighblue>**<http://localhost:3000>**</font>. The port number at the end should match the port variable You've set at the beginning.

**<font color=red>NOTE:</font> Anytime you make changes to your code, you will have to restart your server! I would suggest importing a module like [nodemon](https://nodemon.io/) to restart your application on the fly.**

Once you connect to your server, you should see some output to your terminal with the information we requested in the console. Congrats, you've just created a node server! :grin:

-----
</br>

### <p style="text-align:center">Sending a Response in a Node Server</p>

</br>

Sending a response in the server is pretty straight forward. We're going top take our code from the previous section and modify it to output some html when we visit. In this case we're going to use the `write()` method to write html to our server. The code should look like this:

`const server = http.createServer((req, res) => {
    console.log (req.url, req.method, req.headers);`</br>
    `res.setHeader('Content-Type', 'text/html');`</br>
    `res.write(`<html>\<html>\<h1>"Hello World"\<h1>\<html></html>`)`</br>
    `res.end();` </br>
`});`

So in this case for sending a response, we have set cutsom headers the `setHeader()` method, which allows us to output the type of content we want in our `write()` method. In this case, it's just some html with a header that says "Hello World!". More is possible through the response parameter, but that should be good enough to get you started. Once you restart your server and visit <font color="lighblue">**<http://localhost:3000>**</font> (or whatever you put in for the <font color="lighblue">**port**</font> variable), you should be able to see the output in the page of your server. Congrats! you've sent a response through your node server! :grin: </br></br>

----

</br>

### <p style="text-align:center">Routing Requests in a Node Server</p>

</br>

In this section we'll learn how tro produce different pages based on the url endpoint. We'll take our code from before and modify it to route different requests. </br>

First off, we're going to parse the url and assign it to a constant. Like, so: </br>

`const server = http.createServer((req, res) => {`</br>
    <font color=lighblue>**const**</font> <font color=lightblue>**url**</font> = <font color=lightblue>**req**</font>.<font color=lightblue>**url**</font>;</br><font color=purple>**if**</font> (<font color=lightblue>**url**</font> === <font color=orange>**'\\'**</font>){</br><font color=lightblue>**res**</font>.<font color=gold>**write**</font>(<font color = orange>\'\<html>\<h1>Welcome to the home page!\</h1>\<html>'</font>)</br><font color=lightblue>**res**</font>.<font color=gold>**end**</font>()</br>}</br>
    `console.log (req.url, req.method, req.headers);`</br>
    `res.setHeader('Content-Type', 'text/html');`</br>
    `res.write(`<html>\<html>\<h1>"Hello World"\<h1>\<html></html>`)`</br>
    `res.end();` </br>
`});`

So in this example, we're checking the requested url for an endpoint in the conditional *if* statement. You could substitute the endpoint out for anything really, and run another `write()` method, or anything else really. It just depends on what you want to do. More examples can be found in the file [here](NODE_REACT_REVIEW_REFRESHER\NODE-STUFF\01-routing-requests\app.js).

<font color = red>**NOTE:</font> This piece of code below creates a form, gives it method, which is POST, and sets the action to \"\message" to make a request to the endpoint <font color = lighblue><http://localhost:3000/message></font>. Once the form gets sumbitted from the input type "submit" placed on the button, a new page will be rendered with information from that request. This is possible because of the "name" attribute placed on the form. This could be named anything, but node will pass that data on to the request page.**</br></br>
`res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');` </br>

From there, we want to check if the url is equal to "/message" and the request method is equal to post. Like so:

`if (url === "/message && method === "POST"){//execute some code}`

in this case, we're going to redirect the user back to the homepage, create a file, and store the message that was typed into the file. so now we'll need to use the core module <font color="orange">**fs**</font> so let's import it like we did the last module:

`const fs = require('fs)`

Quick and easy, just import to the top of your file!

Then in our code, we want to write a new file using the `writeFile()` method stored in <font color="orange">**fs**</font>, like so:

`if (url === "/message && method === "POST"){fs.writeFileSync("message.txt","DUMMY");
res.statusCode = 302;` </br>
`res.setHeader("location", "/");`</br>
`}`

So in the code above, what we're doing is creating a file called "message.txt", then passing dummy text to it through the second argument. Then, we set the status code of the 302, which represents a redirect, then we want to set our headers ion the `setHeader()` method.

**<font color="red">NOTE:</font> The first paramter in the `writeFileSync()` method represents the file path, simply just add the file name if you want the file to be in the same path as the parent folder. Just add \".\this_path\then_this_path\final_path\" to reach a relative endpoint.**

Then finally we want to put <font color="purple">**return**</font> <font color="lighblue">**res**</font>.<font color="gold">**end**</font>() at the end of our statement to stop the program from runnning, as it's <font color = red>***impossible***</font> to access <font color="lighblue">**res**</font> and <font color="lighblue">**req**</font> data after calling <font color="purple">**return**</font>.</br></br>

----

</br>

### <p style="text-align:center">Parsing Data Sent From a Request</p>

</br>

Now that we have our server creating and writing to our file, we want to take the data being entered into our form and put into our file.

When we do this, we'll need to parse our data. In order to do this, we'll need to register an event listener with the `on()` method provided to us by the <font color = lighblue>req</font> parameter. like so:

`req.on()`

This code is put in before we send the status code or even create the file. for the `on()` parameter, wecan listen for an event, in this case, it will be data. So it should look like this:

`req.on('data', (chunk) => {
// execute some code
})`

In the code example above, we know that the `on()` method takes two parameters, the 'event', and the function that should be called when data comes from the event.

From there we want to make a const that is an empty array called 'body', the source code can be found [here](NODE-STUFF/02-parsing-request-bodies/app.js) for further details.

Then we want to push the new data coming from the anonymous chunk function into the body array. It should look like this:</br></br>
`const body = [];` <br>
`req.on('data', (chunk) => {
body.push(chunk)
})`

Now we need to register another event listener that listens for the 'end' event. Like so:

`req.on('end')`

And like before, we'll make another anon function to run parsing methods. Like so:

`req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody);
    const message = parsedBody.split('=')[1]
    fs.writeFileSync('message.txt', message);
})`

So this is what we've done so far. We've taken a native module called <font color = jade>Buffer</font> and used it to receive our data chunks, then we're taking a <font color = jade>Buffer</font> method called <font color = gold>concat</font>() to glue our string together from the chunks received by the <font color = jade>Buffer</font>. After that, we're using the <font color = gold>toString</font>() method to cast the data into a string. After that, we need to take the <font color = lighblue>parsedBody</font> variable and split it away from the rest onf the data. We use `split('=')[1]` to say we want to split the data into two based on where the <font color = orange>"="</font> is in the **name=message** where we've written it into our server where we used <font color = lighblue>res</font>.<font color = gold>write</font>()
</br></br>

-----

</br>

### <p style="text-align:center">Blocking and Non-Blocking Code</p>

</br>

This section is mostly to do with coding in blocks rather than having everything coupled all together. look at this codoe for example:
</br>
`return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }`

  If we notice in the <font color = lighblue>fs</font>.<font color = gold>writeFile</font>() function, the `writeFile()` method takes three parameters instead of two, the thirs being <font color = lighblue>err</font>, which is the the third parameter that marks that something has happened. There is no error handling in this block of code as of yet, but we see that the program will check for truth in the <font color = lighblue>err</font> parameter before moving on. You'll also notice that this is an anonymous function meaning that it wont be executed until something has happened. This is called an *asynchronous* function. You can see all the code put together right [here](NODE-STUFF/03-blocking-and-non-blocking-code/app.js)

  </br></br>

-----

</br>

### <p style="text-align:center">Using The Node Modules System</p>

</br>

Here, we just want to focus on cleaning up our code. All we've done here is just move the routing functions into a routes folder so we can call them in another file, preferable our main app file. Afetr we've moved our file, we can import our modules in a couple ways:

`module.exports = requestHandler`

Here, we're just exporting a module that we made in the routes folder to have globally avaiable across other modules. we can import it in our app file like so:

`const routes = require('./routes');
`

So now that we have this module in our app.js file, we can use any of the routes that come with it with their respective anon functions. They can referenced in a couple ways:


</br>**As a regular export:**</br>
 module.exports = requestHandler;</br></br>

</br>**As an object:**</br>
module.exports = {
    handler: requestHandler,
    someText: \'Some hard coded text\'
 };</br></br>

</br>**As a group of regular exports:**</br>
module.exports.handler = requestHandler;</br>
module.exports.someText = 'Some text';</br></br>

</br>**Or an export of each component of your pragram:**</br>
exports.handler = requestHandler; </br>
exports.someText = 'Some hard coded text'; 