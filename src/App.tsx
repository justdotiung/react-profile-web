import Gnb from "./components/gnb";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  const elem = useRoutes(routes);
  return (
    <>
      <Gnb />
      <div className="app__container">{elem}</div>
    </>
  );
};

export default App;
