import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
