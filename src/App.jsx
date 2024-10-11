import { Home } from "./components/Home"
import { Header } from "./components/Header"
import { AboutMe } from "./components/AboutMe"
import { Projects } from "./components/Projects"
import { Services } from './components/Services';
import { ContactMe } from "./components/ContactMe";
import { Trajectory } from "./components/Trajectory";

export const App = () => {

    return (
        <>
            <Home />
            <AboutMe />
            <Projects />
            <Services />
            <Trajectory />
            <ContactMe />
            <Header/>

        </>
    )
}