import { Home } from "./components/Home"
import { Header } from "./components/Header"
import { AboutMe } from "./components/AboutMe"
import { Projects } from "./components/Projects"
import { Services } from './components/Services';

export const App = () => {

    return (
        <>
            <Header/>
            <Home />
            <AboutMe />
            <Projects />
            <Services />
        </>

    )
}