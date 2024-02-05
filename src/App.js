import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Note from './component/Note';
import notes from './notes';

function App() {
  return (
    <div className="App">
      <Header/>
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
