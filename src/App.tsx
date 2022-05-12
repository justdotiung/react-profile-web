import Gnb from "./components/gnb";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { useRef, useState } from "react";

const App = () => {
  const elem = useRoutes(routes);
  const [menuChecked, setMenuChecked] = useState(false);

  return (
    <>
      <div onClick={() => setMenuChecked(false)}>
        <Gnb menuToggle={setMenuChecked} menuChecked={menuChecked} />
        <div className="app__container">{elem}</div>
      </div>
    </>
  );
};

export default App;
