import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import ToDo from './ToDo';
import ToDos from './ToDos';

function App() {
  return (
      <Switch>
        <Route exact path="/" children={<ToDos />} />
        <Route path="/todo/:id" children={<ToDo />} />
      </Switch>
  );
}

export default App;
