 # <h1 style="text-align: center">React Refreshers</h1>

 <h2 style="text-align: center">Jimmie's Personal Refresher on React Concepts</h2>
 </br>
  <h3 style="text-align: center">Table of Contents</h3>
  </br></br>

  - [Initializing a React Project](#initializing-react-project)
  - [Building and Exporting a Component](#building-and-exporting-component)
  - [Import a Custom Component](#importing-a-component)
  - [Adding CSS to Our Component](#adding-css-to-component)
  - [Outputting Dynamic Data to the Component](#outputting-dynamic-data-to-component)

</br></br>

____

</br>

 <h2 style="text-align: center">Initializing a React Project</h2>
 </br>

To initialize a react app, simply use this command in your terminal:

`npx create-react-app <APP_NAME>`

You then want to change directories into you project folder and use this command:

`cd <APP_NAME>`

Then to start the project, use this command:

`npm start`
</br></br>

____

</br>

 <h2 style="text-align: center">Building and Exporting a Component</h2>
 </br>

 In your `src` file, you'll want to create a `components` folder to hold all of your custom components.

 so for example, i have the `ExpenseItem.js` folder in my source file.</br></br>

 <h2><font color=red>NOTE:</font> It is important that you name your React files with capital letters at the start of each word, or it could introduce bugs. It has to be the same everytime!</h2>
 </br></br>

 Essentially, A component in react is just a javascript function! So our file looks like this:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/comp-example.PNG)

 So now, we want to make this component globally available by adding an `export` statement at the ending of the file, like so:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/comp-example-1.PNG)
</br></br>

____

</br>

 <h2 style="text-align: center">Importing a Custom Component</h2>
 </br>

 So now we want to import the custom component `ExpenseItem` we just built.

 The first thing we want to do is import the component at the top of the page, then reference that item in our main app, like so:</br></br>

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/comp-example-2.PNG)
</br></br>

____

</br>

 <h2 style="text-align: center">Adding CSS to our Component</h2>
 </br>

 So now, let's style our newly creadted component. We'll want to create a CSS file in our components file as well. So in this case im going to create `ExpenseItem.css` in the components directory.

 Once we have our CSS file configured the way we want, We'll want to add to our Component, like so:</br></br>

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/comp-example-3.PNG)

 Notice at the top of the file, we just imported our CSS file like any other file. Now we're ready to go!

 To reference each of our class in the CSS file, we want to use the `className` attribute, to use the styling of each class correctly, like so:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/comp-example-4.PNG)
</br></br>

____

</br>

 <h2 style="text-align: center">Outputting Dynamic Data into Components</h2>
 </br>
