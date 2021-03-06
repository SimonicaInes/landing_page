import './App.css';
import Navbar from './components/navbar/Navbar';
import SectionContainer from "./components/section-container/SectionContainer";
import About from './components/about/About';
import Experience from './components/experience/Experience';
import ProficiencyLevels from './components/proficiency/ProficiencyLevels';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import {LEVELS, LANGUAGES_PROFICIENCIES, SKILLS_PROFICIENCIES, WORKPLACES, EDUCATIONS, PROJECTS, REEL} from "./constants";

function App() {
    return (
        <>
            <header>
                <Navbar/>
            </header>

            <main>
                <About/>

                <SectionContainer title="Work Experience">
                    <Experience names={WORKPLACES}/>
                </SectionContainer>

                <SectionContainer title="Education">
                    <Experience names={EDUCATIONS}/>
                </SectionContainer>

                <SectionContainer title="Reel">
                    <Project 
                        title={REEL.title}
                        images={REEL.images}
                        description={REEL.description}
                    />
                </SectionContainer>

                <SectionContainer title="Languages Spoken">
                    <ProficiencyLevels
                        levels={LEVELS}
                        proficiencies={LANGUAGES_PROFICIENCIES}
                    />
                </SectionContainer>

                <SectionContainer title="Skills">
                    <ProficiencyLevels
                        levels={LEVELS}
                        proficiencies={SKILLS_PROFICIENCIES}
                    />
                </SectionContainer>

                <div id="#projects">
                    <SectionContainer title="Projects">
                        {PROJECTS.map(project => {
                            return <Project 
                                title={project.title}
                                images={project.images}
                                description={project.description}
                            />
                        })}
                    </SectionContainer>
                </div>
            </main>
        
            <footer>
                <SectionContainer title="Contact">
                    <Contact/>
                </SectionContainer>
            </footer>
        </>
    );
}

export default App;
