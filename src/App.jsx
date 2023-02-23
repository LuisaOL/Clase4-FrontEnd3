import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ComponentePrincipal from './components/ComponentePrincipal'
import Nombres from './components/Nombres'



function App() {

  let nombres = ['Luisa','Alejandra','Victoria','Mayra']
  return(
    <>
    <ComponentePrincipal/>
    <Nombres nombre = {nombres[0]}/>
    <Nombres nombre = {nombres[1]}/>
    <Nombres nombre = {nombres[2]}/>
    <Nombres nombre = {nombres[3]}/>
    </>
  )

}

export default App
