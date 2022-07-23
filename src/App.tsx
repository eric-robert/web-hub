import { Button, Grommet} from "grommet";
import { useState } from "react";
import PageWrapper from "./library/PageWrapper";
import { FormClose, Layer, Deploy, Paint, PauseFill, Book } from 'grommet-icons';
import { matchRoutes, useLocation, Routes, Route, useNavigate } from "react-router-dom"
import { theme } from "./theme";
import Home from "./pages/Home";
import Writings from "./pages/Writings";
import Projects from "./pages/Projects";
import Writing from "./pages/Writing";

export default function () {

    const currentRoute = useLocation()
    const navigate = useNavigate();

    const projectActive = currentRoute.pathname.includes("web-hub/project")
    const projectColor = projectActive ? "accent" : undefined

    const writingActive = currentRoute.pathname.includes("web-hub/writing")
    const writingColor = writingActive ? "accent" : undefined
    
    const rootActive = currentRoute.pathname == "/web-hub"
    const rootColor = rootActive ? "accent" : undefined

    if ( !currentRoute.pathname.startsWith('/web-hub')){
        setTimeout(() => navigate('/web-hub'))
    }
    
    const icons = [
        <Button
            key={1}
            icon={<Book color={writingColor}/>}
            onClick={() => {
                navigate("web-hub/writing")
            }}
        />,
        <Button
            key={0}
            icon={<Deploy color={projectColor}/>}
            onClick={() => {
                navigate("web-hub/project")
            }}
        />
    ]

    const children = <Routes >
        <Route path="web-hub/" element={<Home/>} />
        <Route path="web-hub/project" element={<Projects/>} />
        <Route path="web-hub/writing/:id" element={<Writing/>} />
        <Route path="web-hub/writing" element={<Writings/>} />
    </Routes>

    return <Grommet theme={theme} full>
        <PageWrapper
            color={rootColor}
            title={"Eric"}
            icons={icons}
            children={children}
        />
    </Grommet>
}