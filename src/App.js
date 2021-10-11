import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NotesList from './pages/NotesList';
import Note from './pages/Note';

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Router>
          <Header />
          <Route path='/' exact component={NotesList} />
          <Route path='/note/:id' component={Note}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
