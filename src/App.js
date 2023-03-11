import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ParticlesBg from "particles-bg";
import paths from "./Components/Paths";
import Routing from "./Components/Routing";
import NavigationBar from "./Components/NavigationBar";
// TODO: import AlertDismissible from

let projects = paths.filter((_, i) => i < paths.length - 5);

function App() {
  return (
    <div>
      <NavigationBar paths={paths} projects={projects} />
      <Routing paths={paths} projects={projects} />
      <ParticlesBg
        type="circle"
        bg={{ position: "fixed", zIndex: -1, top: 0, left: 0 }}
      />
    </div>
  );
}

export default App;
