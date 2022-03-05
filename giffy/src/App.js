
import "./App.css";
import ListOfGifs from "./components/Listado de Gifs/ListOfGifs";

import {Link, Route} from 'wouter'


export default function App() {
  // const [keyword, setKeyword] = useState('bts')


  return (
    <div className="App">
      <section className="App-content">
      <h1>MUSIC GIFS APP</h1>
      <Link to = '/gif/rock'>Gifs de Rock</Link>
      <Link to = '/gif/flamenco'>Gifs de Flamenco</Link>
      <Link to = '/gif/bts'>Gifs de BTS</Link>
      <Link to = '/gif/rap'>Gifs de Rap</Link>
      <Route path='/gif/:keyword'
      component={ListOfGifs}/>
      
      </section>
    </div>
  );
}


