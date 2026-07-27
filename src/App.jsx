import { useReducer, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Route, Routes} from 'react-router-dom'
import SelectCarModal from './components/modals/SelectCarModal'
import Hero from './components/Hero/Hero'

//use Reducer
const initialState ={
  drawer:false,
  modal:false,
  onmouse:false,
  
}
const reducer =(state,action)=>{
switch (action.type) {
  case "toggleDrawer":
     return {...state,drawer:!state.drawer}

 case "toggleModal":
  return {...state,modal:!state.modal}
    case "onmouseon":
    return{...state,onmouse:true}
    case "onmouseLeave":
      return{...state,onmouse:false}
   default:
      return state
}
}


function App() {
   const [state, dispatch] = useReducer(reducer, initialState);

  const drawerHandeler = () => {
    dispatch({type : "toggleDrawer"})
}

const modalHandeler=()=>{
    dispatch({type:"toggleModal"})

}

const onmouseEnter=()=>{
 setTimeout(()=>{dispatch({type:"onmouseon"})},200)}

const onmouseOver=()=>{
  setTimeout(()=>{dispatch({type:"onmouseLeave"})},200)
}

  return (
    <>
    
         <Header state={state} drawerHandeler={drawerHandeler} modalHandeler={modalHandeler} onmouseEnter={onmouseEnter} onmouseOver={onmouseOver}/>

         <Hero/>         
 
              
     
    </>
  )
}

export default App
