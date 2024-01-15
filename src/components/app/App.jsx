import './App.css'
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/NotFound/not-found.jsx';
import Glossary from '../../pages/Glossary/glossary.jsx';
import Graph from '../../pages/Graph/graph.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/itmo-glossary/graph" element={<Graph/>}/>
        <Route path="/itmo-glossary/" element={<Glossary/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
