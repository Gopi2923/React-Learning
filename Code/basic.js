/* 

<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands)

*/

// Hello world from javascript 

// const heading = document.createElement('h1')
// heading.innerHTML = 'Hello world from js'

// const root = document.getElementById('root')
// root.appendChild(heading)


// Hello world form react 

// const heading = React.createElement(
//   'h1',
//   { id: 'heading', className: 'head' },
//   'Hello World from React!'
// ); // It's the job of Core React to create an element i.e, heading in this case

// React Element is normal JavaScript Object{}

// console.log(heading); // object

const parent = React.createElement("div", {id: 'parent'}, [
    React.createElement('div', {id: 'child1'}, [
      React.createElement('h1', {}, "I am h1 tag"),
      React.createElement('h2', {}, "I am h2 tag")
    ]),
    React.createElement('div', {id: 'child2'}, [
      React.createElement('h1', {}, "I am h1 tag"),
      React.createElement('h2', {}, "I am h2 tag")
    ]),
  ])
  
  console.log(parent);

  const heading = <h1>Hello World form JSX</h1>

const Title = () => (
  <div>
    <h2>Hello from title Component</h2>
  </div>
)

const Component = () => {
  return   (
    <div>
  { heading }
  { Title() }
  <Title />
  <Title></Title>
  <h1>React Component</h1>
  </div>
  )
}
  
  const root = ReactDOM.createRoot(document.getElementById('root')); // It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element which is rendered to be on browser. This root is the place where all React code will run.
  
  // root.render(heading);
  root.render(parent);
  
  // In React, Render is the technique that can redirect a page with the help of function render(). Most importantly, render a function we can use to define the HTML code within the HTML element. It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
  

