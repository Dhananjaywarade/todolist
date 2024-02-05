import { useState } from 'react';
import './App.css';
import CreateArea from './component/CreateArea';
import Footer from './component/Footer';
import Header from './component/Header';
import Note from './component/Note';

function App() {
  const[notes,setNotes]=useState([

  ])
  function addNote(newNote) {
    setNotes(prevNotes=>{
    return  [...prevNotes,newNote];
    })
  }

  function deleteNote(id) {
   setNotes(prevNotes=>{
   return prevNotes.filter((noteItem,index)=>{
      return index!==id;
    })
   })
  }
  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd={addNote}/>
      {
        notes.map((item,index)=>(
          <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote}/>
        ))
      }
      <Footer/>
    </div>
  );
}

export default App;
