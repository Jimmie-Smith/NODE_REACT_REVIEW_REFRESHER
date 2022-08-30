  [<h1 style="text-align: center">React Refreshers</h1>](#h1-styletext-align-centerreact-refreshersh1)

 <h2 style="text-align: center">Jimmie's Personal Refresher on React Concepts</h2>
 </br>
  <h3 style="text-align: center">Table of Contents</h3>
  </br></br>

- [Initializing a React Project](#initializing-react-project)
  - [Building and Exporting a Component](#building-and-exporting-component)
  - [Import a Custom Component](#importing-a-component)
  - [Adding CSS to Our Component](#adding-css-to-component)
  - [Outputting Dynamic Data to the Component](#outputting-dynamic-data-to-component)
  - [Passing Data via Props](#passing-data-via-props)
  - [Adding Plain Javascript to Your Component](#adding-js-to-your-component)
  - [Splitting Components (For Neater Code!)](#Splitting-Components-For-Neater-Code)
  - [Passing Children Props to a "Shell" Component](#passing-children-props-to-component)
  - [React State and Working with Events](#React-State-And-Working-with-Events)
  - [Handling Form Submission](#handling-form-submission)
  - [Ressetting Forms After Submission](#Resetting-Forms-After-Submission)
  - [Sending Form Data to Other Components](#Sending-form-data-to-other-components)
  - [Rendering lists and conditional Content](#rendering-list-and-conditional-content) 
  - [Handling the Key Warning](#Handling-the-Key-Warning)
  - [Outputting Conditional Content](#Outputting-conditional-content)

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

So now, we want to put dynamic data into components, since we dont have dynamic data yet, I'm just going ot show the basic syntax of what we're doing. It looks like this:

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/comp-example-5.PNG)

Notice how we reference data *outside* of our `return` statement, then we put them in our return statement by putting curly braces around our variable name. So anytime that variable changes, our DOM will change along with it.

<h2>Note: Objects have to be formatted to strings or integers in order not to break the code. Leaving the `Date` object by itself will cause an error. It needs to be formatted to a string in order to get the code to work. Look below:</h2>

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/comp-example-6.PNG)
</br></br>

--------------------------------

</br>

 <h2 style="text-align: center">Passing Data via Props</h2>
 </br>

 So now we want to make our code reusable, meaning we can use the same class repeatedly with different data passed through.

 So in this case, I've created a new fil called *ExpenseItems.js* where I've added an object called *expenses*. It looks like this:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/expense-array.PNG)
</br></br>
As you can see, its just a simple array filled with objects. Now we just need to import it to our *App.js* file and use them as "properties" Below is an example of how to do this:

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/props-example-1.PNG)

So notice how we've imported our expenses object by using `export default expense` at the end of our ExpenseItems.js file and we've imported that object into the code above. alos notice how we've assigned names to our properties and refrerenced them using this syntax `expenses[index].<PROPERTY_NAME>` which is the name of the array, followed by the index of the object we want to reference, followed by a given property we've assign it. If you save this file, it won't populate the info we need, there's an extra step to make this work!

So now, just like a function with parameters, we want to pass in the properties to our function like so:

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/comp-example-7.PNG)

Notice how we've passed in the *props* parameter into our `ExpenseItem()` function, This is how react knows to pass the information from *App.js* into our ExpenseItem file. And just like before, we reference the properties our *props* with the `{props.attribute}` syntax. This is how we make our code reusable and pass dynamic data from one component to another! :grin:
</br></br>

<h1 style="text-align: center"><font color="red">NOTE:</font>
IF YOU HAVE *PROPS* AS A PARAMETER IN YOUR COMPONENT, YOU NEED TO PREFACE YOUR COPIED VARIABLES FROM THE ORIGINAL FILE WITH A <FONT COLOR=RED>PROPS.SOME_VARIABLE</FONT> TO HAVE IT SHOW UP CORRECTLY.. OR YOU WILL GET AN UNDEFINED ERROR!!!!!
</h1>
</BR></BR>
---

</br>

 <h2 style="text-align: center">Adding Plain Javascript to Your Component</h2>
 </br>

 Sometimes, we'll need to incorporate plain javascript into our components to help us do things not native to react, so as reformat a date so that it is more reader friendly, which we'll do now:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/comp-example-8.PNG)

 Essentially, what we've done hear is split up the month, date, and year into to seperate *divs*, then we used javascript logic to format that data into something readable, then store them into a variable for reuse. This makes our code cleaner!
 </br></br>

____

</br>

 <h2 style="text-align: center">Splitting Components (for neater code!)</h2>
 </br>

To keep our code neat, we want to split our components into smaller components which will still render the same way as beofore, but now we're just making it more manageable. For this example I've creadted a new file in components calle *ExpenseDate.js*

This will be a file used to purely transform and render our date like we date before, only this time, were seprating it into its own component, like so:

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/comp-example-9.PNG)

Notice how we've done the same with our *props* parameter in ExpenseDate.js. we've also copied and pasted the logic from ExpenseItem.js and put it here in ExpenseDate.js making both components less crowded and more readable. Our *ExpenseItem.js* file looks like this:

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/props-example-2.PNG)

As you can see here, we've imported our `<ExpenseDate/>` module, put it into our *return* statement, then passed the props for the *date* attribute into `props.date` which grabs the component from ExpenseDate.js.
 </br></br>

____

</br>

 <h2 style="text-align: center">Passing Children Props to a Shell Component</h2>
 </br>

 This concept is a little more abstract, but passing props to an overall shell component includes all the components we've written so far. So we want to have a "shell" component in case we want to use another composition like this one.

 So what I've done is create a new file called *card.js*, which will hold all of the components we've done so far. take a look below:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/props-example-3.PNG)

 A couple things to note:

- the word `children` is **reserved**, meaning it can't be assigneed to anything else. `{props.children}` refers to everything that is encapsulated within this component. I'll show an example below.</br></br>
- When we assign the `className` to <font color=orange>***'card'***</font> by itself, the styling located in the ***card.css*** file will overwrite any previous styling. So in order to keep all of our styling, we need to dynamically build our `className`, and assign to a variable so that it may be referenced as the `className`, in this cae, we just name our className ***{classes}***, which we've entered as the `className`.
 </br></br>

____

</br>

 <h2 style="text-align: center">React State and Working with Events (Make it React!)</h2>
 </br>

 Lets make our page interactive. Just for an example, we'll add buttons to our ExpenseItem file, like so:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/state-example.PNG)

 Which translates to:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/ui-example.PNG)

 It's not pretty, but now we have a button for each item. Let's see what we can do :grin:

 So to start, we're just going to start out listening for a click, whcih is a simple listener built in to Javascript. Look below:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/event-example.PNG)

 So it's pretty self explanatory! we define a arrow function that designates an action to be taken, then we reference it like any other variable on our ***onClick*** listener. It's about as simple as that. This is vanilla Javascript, so check docs to see what else you can do.

 Now we're going to doing something with the DOM. Look at the example below:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/state-example-1.PNG)

- First off, we have to import the ***React*** module, which is a module that comes built in with react. If you notice, we also pull in something called ***useState***, which is what we'll use to keep track of our variables state, which is the title for now.
- In order to use the hook **<font color=red>IT MUST BE USED WITHIN OUR COMPONENT FUNCTION. IT CANNOT BE USED OUTSIDE OF THE FUNCTION, NOR CAN IT BE REFERENCED INSIDE ANOTHER FUNCTION!</font>**
- We need to set two variable names. One to reference the orignal variable, and the other to reference thje function that will update its state. In this case, it's in line 7:

`const [title, setTitle] = useState(props.title));`

our const ***title*** will represent the oringal ***props.title*** variable, and ***setTitle*** will represent the function that updates the state of ***title*** be sure to follow this syntax at all times.

so now, when we reference our ***title*** in our block of JSX, anytime we click the button, the code will re-run to update the values in our DOM, like so:

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/ui-example-1.PNG)

Ta-Da! Now we can use useState! :grin:
 </br></br>

____

</br>

 <h2 style="text-align: center">Handling Form Submission</h2>
 </br>

 In this section, we're going to use ***useState*** yet again to track the state of our user input, store that input, and create another object in our Expense Items. 

 We've created a new folder called **NewExpense.js** to hold all of our new files for this form. The code looks like this:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/state-example-2.PNG)
 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/state-example-3.PNG)
 </br></br>

 So like before, we import *useState* from react, then call it within our NewExpenseForm Function.

 As you can see, we're setting *useState* for each field in our form, and tracking it's state through the ***event*** keyword. This comes built in with each new handler function that you see beneath the ***useState*** hooks.

 We have one for the Title, Amount, and Date respectively; then we have the last handler, which gets referenced on the form. 

 If you notice on the ***formHandler*** function, we have something called the `preventDefault()` function. This is to prevent the page from being refreshed so that we can finish handling the data being passed through `event.target.value` which is how we reference the value of the input being typed in.

 The form has a listener called `onSubmit` which is attached to our `formHandler()` function each time the submit button is pushed, and the rest of the form fields have the `onChange` listener, which refreshes our page each time each time ANY of those values change. for right now, it just logs the object we created with the data inserted into its parameters, but its good enough for now.
 </br></br>

____

</br>

 <h2 style="text-align: center">Resetting Forms After Submission</h2>
 </br>

 So After We've collected the information, we want to clear our form fields and reset the form to how it was to receive more input.

 This part is super simple. Here is the code below:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/state-example-4.PNG)

 - At the end of our `formHandler` function, we'll need to set the new state of our fields to an empty strings, just like in the code above, ***then***, we want to set the `value` of each input to its orignal hook value.

That's it, you're done! :grin:
 </br></br>

____

</br>

 <h2 style="text-align: center">Sending Form Data to Other Components</h2>
 </br>

 Now we want to send form Data over to other components. First, we will need to create our own event props, like we did passing information from a child node to a parent node, only this time, it works backwards!

 So here's the code for ***NewExpense.js***, which is the function that holds our ***NewExpenseForm***:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/state-example-5.PNG)

 - As you can see, this works like any other function that we would be pointing to as if our custom component had an `onClick` or an `onChange` feature. Only this time, its a totally custom listener with a handler attached. Easy!

There's one more step that we have to do though:

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/state-example-6.PNG)

This is the piece of code we needed to put into ***ExpenseForm***. Since we're passing data to a parent component, we need to put in our `props` parameter at the very top of our component function, so that they may be passed down to the code below. To communicate the data from this form, we simply need to pass `props.onSaveExpenseData();` As this signals to React that this listener is assigned to this `formHandler` function, which will then send the props we have to the `onSaveExpenseData` listener, which then points to our `onSaveExpenseDataHandler`.

Essentially, you can always chain this method together to get information all the way up to the top level which is App.js.Moving on for now :grin:

</br></br>

____

</br>

 <h2 style="text-align: center">Rendering Lists and Conditional Content</h2>
 </br>

 So now, in our application, we're going to build the logic that filters the list of items rendered based on a new component that we build. 

 ***Note: this logic can be used to conditionally rener most things you build. For the sake of this example, we're going to use the code we have already.***

 If we check the ***app.js*** folder, you'll see that we're passing the ***expenses*** folder into it to render expenses, so lets take a look at that. 

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/conditional-expample-1.PNG)

 - Notice how we've replaced our hard coded `<ExpenseItem/>` object with a function native to javascript called `map()` essentially this is a built in javascript method that takes an array, and modifies each datapoint in the array to output a brand new array.
 - In this case, we're taking the `props.items` array from our ***apps.js*** file and mappiing each item into a `<ExpenseItem/>` item component. We then take the same properties as before and reference the properties seperately. 

<h2>Note: Also, anytime you want to render dynamic content, be sure to add the curly braces for each block of code!</h2>

Our map function should work just the same as our static code we had before, only this time, when we change the array, our items should change.

so now we need to update the Array everytime it changes. In order to do that, we need to use the state of the array! It looks like this:

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/state-example-7.PNG)

- 1st, we've changed our *items* variable to the ***DUMMY_EXPENSES*** to signify that the starting array serves as an initial state to keep track of.
- Then,a s usual, we use our `useState()` function to keep track of expenses, which was our original variable. We set the default state to ***DUMMY_EXPENSES***.
- Then we alter our `onAddExpenseHandler()` to set our new state via `useState()`. As you can see, with the `useState()` method, we get the previous state of the array by default. We can then pass it to a new array with the new ***expense*** put in with the spread operator. 

This will return the new expense with the previous snapshot of the Array.

So now when we add something else in our list, the UI will update with our new data! :grin:

</br></br>

____

</br>

 <h2 style="text-align: center">Handling the "key" Warning</h2>
 </br>

</br></br>

In your dev tools in the browser, you may see a warning that looks like this:

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/key-warning-browser.PNG)

This could introduce bugs if this is left unchecked. Checking the array on every re-render could potentially cause performance issues.

Here's what we do to fix it:

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/key-warning.PNG)

In the ***expenses*** file, ***we simply add a built in prop called "key" then we assign it to a unique identifier from our Expsense Item. In this case, it's just the id. we also have a 2nd parameter built in called `index` which we could also use, but it's not recommended as this could produce bugs also!***
____

</br>

 <h2 style="text-align: center">Outputting Conditional Content</h2>
 </br>

So now, we want to render conditional content. We've created a conditional statement which is assigned to the filterExpenses array. Look at thisL

![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/conditional-statement-example-1.PNG)

first, we track the state of the thing that's controlling the gloabl state. In this case, its the filitered year, this is comming from the the value in our ***ExpenseFilter.js*** file.

Then we track the state of the input using `useState()` as usual.

then we have our `filterChangeHandler()` method, which is an arrow function that takes a prarameter that will represent the selected year and set the filtered year to that value. 

then finally, we have the filtered Expenses which will re-render our array based on a `true` statement. So if the `getFullYear()` method returns '2020' and out of the Array, if an objects `expense.date.getFullYear()` equals our selected year in our `onChangeHandler` listener passed from ***ExpenseFilter.js***.

____

</br>

 <h2 style="text-align: center">Rendering Content</h2>
 </br>

 now we have code like this in our ***Expenses.js*** file:

 ![alt-text](/NODE_REACT_REVIEW_REFRESHER/REACT-STUFF/photo-examples/ternary-example.PNG)

 This should be pretty straightforward to read, but just a couple notes:

 - we take the `map()` function like we had before and put int inside of our if statement at the top. We're basically saying if the `filteredExpenses` array has a greater length then 0, our expensesContent varianble will be equal to the mapped version of our `filteredExpenses` array.
 - If the `filteredExpenses` array length is equal to 0, then then our expensesContent is equal the 'not found' paragraph we've assigned it to.
 - finally, we simply add the components into our return statement with their respective listeners and change handlers, then we should be done!



