import React from 'react'
import {Routes,Route} from 'react-router'
import { HomePage } from './pages/HomePage'
import { CreatePage } from './pages/CreatePage'
import { NoteDetailsPage } from './pages/NoteDetailsPage'

const App = () => {
  return (
     <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes >
        <Route  path='/' element={<HomePage />}/>
        <Route  path='/create' element={<CreatePage />}/>
        <Route  path='/note/:id' element={<NoteDetailsPage />}/>
      </Routes>
    </div>
  )
}


export default App;


//there is two exports --- 1-named export (export const App = () => {} and import {App} from './App')
//2-default export(export deafult App; and import App from './App')