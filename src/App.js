
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header';
import LeftPanel from './components/LeftPanel';

function App() {
  return (
   <div className="ui fluid container">
     <Header name='test'></Header>
     <LeftPanel></LeftPanel>
   </div>
  );
}

export default App;
