import React from 'react';
import About from './Pages/About';
import Notes from './Pages/Notes';
import Note from './Pages/Note';
import Projects from './Pages/Projects';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

export default function App() {

    return <BrowserRouter>
        <Routes>
            <Route path="/"             element={<About/>}      />
            <Route path="/about"        element={<About/>}      />
            <Route path="/notes/:post"  element={<Note/>}      />
            <Route path="/notes"        element={<Notes/>}      />
            <Route path="/projects"     element={<Projects/>}   />
        </Routes>
    </BrowserRouter>


}
