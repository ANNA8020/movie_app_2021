import React from "react";
import { HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
    return (
    <HashRouter>
      {/* BrowserRouter도 있지만 다루기 까다로워, HashRouter은 쉬움 */}
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      {/* react는 url를 여러개 동시해 렌더링해 */}
      {/* url를 나눌려면 exact를 통해서 함 */}
      <Route path="/about" component={About} />
      {/* (/about)path 들어가면 (About)component를 보여줘 */}
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
};

export default App;