import './App.css';
import CreateArea from './component/CreateArea';
import Footer from './component/Footer';
import Header from './component/Header';
import Note from './component/Note';
import notes from './notes';

function App() {
  function addNote(note) {
    console.log(note);
  }
  return (
    <div className="App">
      <Header/>
      <CreateArea onAdd={addNote}/>
      {
        notes.map(item=>(
          <Note key={item.key} title={item.title} content={item.content}/>
        ))
      }
      <Footer/>
    </div>
  );
}

export default App;
