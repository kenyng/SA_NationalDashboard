import React from 'react';
import { useState, useEffect, createContext, useContext, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const myFirstElement = <h1>Hello React!</h1>
// root.render(myFirstElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// === Playing with Props ===
// function Car(props:any) {
//   return <h2>I am a { props.brand.name } { props.brand.model }! { props.aa }</h2>;
// }
// function Garage(){
//   return (
//     <>
//     <h1>Line 1111111</h1><br/>
//     <Car brand={ carName } aa="XX"/>
//     </>
//   )
// }

// const carName = { name: "Ford", model: "Mustang" };

// const myElement = <Garage />;

// === Playing with react events ===
// function Football(){
//   const shoot = (a: string, b: any) => {
//     alert(b.type)
//   }

//   return (
//     <Button onClick={(event) => shoot("2ndddd", event)}>This is a button</Button>
//   );
// }
// const myElement = <Football />;

// === Play with if and logical operators &&
// function Garage(props:any) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 && cars[0] === 'Ford' &&
//         <h2>
//           You have {cars.length} cars in your garage. FFFF
//         </h2>
//       }
//     </>
//   );
// }
// const cars = ['Ford', 'BMW', 'Audi'];

// const myElement = <Garage cars={cars} />;

// function MissedGoal() {
//   return <h1>.....</h1>;
// }

// function MadeGoal() {
//   return <h1>!!!!</h1>;
// }
// function Goal(props:any) {
//   const isGoal = props.isGoal;
//   return (
//     <>
//       {/* { isGoal ? <MadeGoal/> : <MissedGoal/> } */}
//       { isGoal && <MadeGoal/> }
//     </>
//   );
// }
// const myElement = <Goal isGoal />;

// === map(), react List ===
// function ObjAA (props:any) {
//   return <li>dynmic text=={ props.brand }==</li>;
// }
// function DefineBrand(){
//   const things = ["A", "B", "C"];
//   return (
//     <>
//     <h1>::::</h1>
//     <ul>
//       {/* {things.map((oo) => <ObjAA brand={oo} />)} */}
//       {things.map((oo) => <ObjAA brand={oo} />)}
//     </ul>
//     </>
//   );
// }
// const myElement = <DefineBrand />

// function CarFunc(props:any) {
//   return <li>I am a { props.k }</li>;
// }
// function Garage() {
//   const carsArr = [
//     {id: 1, brand: 'Ford'},
//     {id: 2, brand: 'BMW'},
//     {id: 3, brand: 'Audi'}
//   ];
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <ul>
//         {carsArr.map((carVariable) => <CarFunc k={carVariable.id} b={carVariable.brand} />)}
//       </ul>
//     </>
//   );
// }
// const myElement = <Garage/>

// function GroceryList() {
//   const items = [
//     {id: 1, name: 'bread'},
//     {id: 2, name: 'milk'},
//     {id: 3, name: 'eggs'}
//   ];

//   return (
//     <>
//       <h1>Grocery List</h1>
//       <ul>
//         {items.map((item) => <li key={item.id}>{item.name}</li>)}
//       </ul>
//     </>
//   );
// }
// const myElement = <GroceryList />

// === Form ===
// function MyForm() {
//   return (
//     <form>
//       <label>Enter your name:
//         <input type="text" />
//       </label>
//     </form>
//   )
// }
// const myElement = <MyForm />

// interface FormInputs {
//   username?: string;
//   age?: number;
// }
// function MyForm() {
//   const [inputs, setInputs] = useState<FormInputs>({});

//   const handleChange = (event:any) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event:any) => {
//     event.preventDefault();
//     alert(JSON.stringify(inputs));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }
// const myElement = <MyForm />

// const myElement = <textarea>
// Content of the textarea.
// </textarea>

// function MyForm() {
//   const [textarea, setTextarea] = useState(
//     "The content of a textarea goes in the value attribute"
//   );

//   const handleChange = (event:any) => {
//     setTextarea(event.target.value)
//     console.log(textarea)
//   }

//   return (
//     <form>
//       <textarea value={textarea} onChange={handleChange} />
//     </form>
//   )

// }
// const myElement = <MyForm/>

// function MyForm() {
//   const [myCar, setMyCar] = useState("Volvo");

//   const handleChange = (event:any) => {
//     setMyCar(event.target.value)
//   }
//   return (
//     <form>
//       <select value={myCar} onChange={handleChange}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//   )
// }
// const myElement = <MyForm/>

//======
// == Hook in React == useState()
//======
// function FavoriteColor() {
//   // const setColor2 = () => { console.log(color) };
//   const [color, setColor] = useState(1);

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         // onClick={() => setColor("blue")}
//         onClick={() => {
//           // setColor2();
//           setColor(2);
//           console.log(color)
//         }}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => {
//           // setColor2();
//           setColor(3);
//           console.log(color)
//         }}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => {
//           // setColor2();
//           setColor(4);
//           console.log(color)
//         }}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => {
//           // setColor2();
//           setColor(5);
//           console.log(color)
//         }}
//       >Green</button>
//     </>
//   );
// }
// const myElement = <FavoriteColor />

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const updateColor = () => {
//     setCar(
//       previousState => {
//         return {...previousState, color: previousState.color === "blue" ? "red" : "blue"}
//       }
//     );
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type='button' onClick={updateColor}
//         >change to blue</button>
//     </>
//   )
// }
// const myElement = <Car />

//======
//== useEffect() ===
//======

// function Timer() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setCount((count) => count + 1);
//   //   }, 1000);
//   // }, []);
//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]);

//   return (
//     <>
//     <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }
// const myElement = <Timer />

// clean up the value prevent from data leaking, but needa assign a name(variable) to blind the =>function
// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);

//     return () => clearTimeout(timer)
//   }, []);

//   return <h1>I've rendered {count} times!</h1>;
// }
// const myElement = <Timer />

// =========
// context ===> global state storing comparing to useState
// interface UserContextType{
//   username: string;
// }
// const UserContext = createContext<UserContextType | undefined>(undefined);
// function Component1() {
//   const [user, setUser] = useState<UserContextType>({
//     username: "KKKKKK"
//   });

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user.username}!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }

// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 />
//     </>
//   );
// }

// function Component4() {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 />
//     </>
//   );
// }

// function Component5() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h1>Component 5</h1>
//       {user && <h2>{`Hello ${user.username} again!`}</h2>}
//     </>
//   );
// }
// const myElement = <Component1 />

// ========= 
// === useRef ===
// function AAA() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(1);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => {setInputValue(e.target.value); console.log(count);console.log(count.current); console.log(inputValue);}}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }
// const myElement = <AAA />

// function AAA() {
//   const inputElement = useRef<HTMLInputElement>(null);

//   const focusInput = () => {
//     if (inputElement.current) {
//     inputElement.current.focus();
//     console.log(inputElement);
//     }
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }
// const myElement = <AAA />

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body1={
//     fontFamily: "Courier-Bold",
//     fontSize: 32,
//   },
//   ...theme.typography.h1={
//     fontFamily: "Courier-Bold",
//   },
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   flexGrow: 1,
// }));
// function Trystack(){
//   return (
//     <Box sx={{ width:500}} >
//       {/* <Stack
//         direction = {{ xs:'column', sm: 'row' }}
//         divider = {<Divider orientation='vertical' flexItem/>}
//        install spacing = {{ xs: 1, sm:2, md:4 }}
//         >
//           <Item>item 1</Item>
//           <Item>item 2</Item>
//           <Item>item 3</Item>
//       </Stack> */}
//       <Stack spacing={{ xs:1, sm:10}} direction="row" useFlexGap flexWrap="wrap"
//       >
//         <Item><Typography variant='h1'>Item 1</Typography></Item>
//         <Item><Typography variant='h3'>Item 1</Typography></Item>
//         <Item>Long content</Item>
//       </Stack>
//     </Box>
//   );
// }
// const myElement = <Trystack />

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
