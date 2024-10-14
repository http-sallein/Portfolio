import { FaHtml5 as HtmlIcon } from "react-icons/fa";
import { FaCss3 as CSSIcon } from "react-icons/fa";
import { IoLogoJavascript as JavaScriptIcon } from "react-icons/io";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import { FaGitAlt as GitIcon } from "react-icons/fa";
import { SiPostgresql as PostgreSQLIcon } from "react-icons/si";
import { GrMysql as MySQLIcon } from "react-icons/gr";
import { TbBrandCSharp as CSharpIcon } from "react-icons/tb";
import { FaJava as JavaIcon } from "react-icons/fa";
import { SiTypescript as TypeScriptIcon } from "react-icons/si";
import { FaFigma as FigmaIcon } from "react-icons/fa";
import { FaReact as ReactIcon } from "react-icons/fa";

const technologies = [
    { name: 'html', component: () => <HtmlIcon /> },
    { name: 'css', component: () => <CSSIcon /> },
    { name: 'javascript', component: () => <JavaScriptIcon /> },
    { name: 'github', component: () => <GitHubIcon /> },
    { name: 'git', component: () => <GitIcon /> },
    { name: 'postgresql', component: () => <PostgreSQLIcon /> },
    { name: 'mysql', component: () => <MySQLIcon /> },
    { name: 'csharp', component: () => <CSharpIcon /> },
    { name: 'java', component: () => <JavaIcon /> },
    { name: 'typescript', component: () => <TypeScriptIcon /> },
    { name: 'figma', component: () => <FigmaIcon /> },
    { name: 'react', component: () => <ReactIcon /> },
];

// Função para encontrar o componente da tecnologia
export const findTechnologyComponent = (nameTechnology) => {
    const tech = technologies.find(tech => tech.name === nameTechnology.toLowerCase());
    return tech ? tech.component() : null; // Chama a função para renderizar o componente
};
