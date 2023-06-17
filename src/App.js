import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popular from "./components/Popular";
import { useGlobalContext } from "./context/global";
import AnimeItem from "./components/AnimeItem";

const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Popular/>} />
    <Route path='/anime/:id' element = {<AnimeItem/>}/>
    </Routes>
    
   
    </BrowserRouter>
  );
};

export default App;

