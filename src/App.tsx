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
            <Route path="/web-hub/"             element={<About/>}      />
            <Route path="/web-hub/about"        element={<About/>}      />
            <Route path="/web-hub/notes/:post"  element={<Note/>}      />
            <Route path="/web-hub/notes"        element={<Notes/>}      />
            <Route path="/web-hub/projects"     element={<Projects/>}   />
        </Routes>
    </BrowserRouter>


}
