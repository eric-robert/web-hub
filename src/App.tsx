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

    const projectActive = currentRoute.pathname.includes("/project")
    const projectColor = projectActive ? "accent" : undefined

    const writingActive = currentRoute.pathname.includes("/writing")
    const writingColor = writingActive ? "accent" : undefined
    
    const rootActive = currentRoute.pathname == "/"
    const rootColor = rootActive ? "accent" : undefined
    
    const icons = [
        <Button
            key={1}
            icon={<Book color={writingColor}/>}
            onClick={() => {
                navigate("/writing")
            }}
        />,
        <Button
            key={0}
            icon={<Deploy color={projectColor}/>}
            onClick={() => {
                navigate("/project")
            }}
        />
    ]

    const children = <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/writing/:id" element={<Writing/>} />
        <Route path="/writing" element={<Writings/>} />
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