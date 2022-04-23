import './App.css';
import AddNote from './components/AddNote';
import NoteItems from './components/NoteItems';

function App() {
  return (
    <div className="container my-5 p-5 text-center" style={{borderRadius:"10px",border:"2px solid red",width:'35rem'}}>
      <h1>ADD YOUR NOTES HERE</h1>
      <AddNote />
      <NoteItems />
    </div>
  );
}

export default App;
