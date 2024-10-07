import { Home } from "./components/Home"
import { Header } from "./components/Header"
import { AboutMe } from "./components/AboutMe"
import { Projects } from "./components/Projects"

export const App = () => {

    return (
        <>
            <Header/>
            <Home />
            <AboutMe />
            <Projects />
        </>

    )
}