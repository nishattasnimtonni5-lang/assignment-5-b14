


# Dev Stack
This project is built with a modern frontend development stack,using React,Typescript,Tailwind CSS and Vite.



## Features

- Responsive design
- Modern and clean UI
- Reusable React components
- Responsive card layout
-Interactive elements


## Technologies

- React
- Typescript
- TailwindCSS
- Vite
- JavaScript (ES6+)
- React-Toastify (NPM Package)



## Installation

npm install
    
## Run Locally

npm run dev

## Build
npm run build
## Q

#### Question i

Answer: JSX is a Javascript syntax in which we can write Javascript/React codes like HTML but it is not exactly HTML .
It is used to write and understand easily the UI stucture and Javascript logic in the same component.

#### Question ii

Answer:1. Props comes from parent component and state manages component by itself.maximum of the time .
2.Props is used to pass data but state is used manage interection .
3.Child can't change props by itself where state can be changed.

#### Question iii
Answer: useSate is that special hook of REACT who temporarily holds data of components and when the datas changes it updates the website screen. 
I used it in Cards.tsx to track and update  selected items in array list.
#### Question iv 
Answer:useeffect is such a hook of REACT whose work is to handle side effects.Means,when any component is created in screen  or updated or deleted then to show additional something in background we use useEffect.

When we fetch data in component body,then by updating the datas are called again and again which is a infinite loop.Thus,browser can be hanged.To solve this we use useEffect.
#### Question v 
Answer: To track items it is used.When REACT uses Virtual DOM then may be new datas are added or previous datas are deleted.So then REACT recognizes it by te key prop snakily.So that's how easily REACT can update .
#### Question Vi 
Answer: Conditional rendering is to show or hide elements by certain conditions(if-else,true,false).
I use it in Cards.tsx to display "Your stack is empty"
#### Question vii 
Answer: We use props to send data from parent to child.We can't send datas from child to parent because REACT is unidirected .But if needed we can Lifting State up.




