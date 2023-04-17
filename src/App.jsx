import "./App.scss";
import ProjectsList from "./components/ui/projectsList";
import TopPart from "./components/ui/topPart";
import projectsInfo from "./components/ui/projectsInfo";
import ContactMe from "./components/ui/contactMe";

function App() {
  return (
    <div className="bg-slate-800">
      <TopPart />
      <ProjectsList projects={projectsInfo} />
      <ContactMe />
    </div>
  );
}

export default App;
