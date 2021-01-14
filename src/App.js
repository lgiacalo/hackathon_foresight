import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import Product from "./pages/Product";
import Guides from "./pages/Guides";
import GuideDetails from "./pages/GuideDetails";

function App() {
  return (
    <div className="globalContainer">
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/categories/">
          <Categories />
        </Route>

        <Route exact path="/guides/">
          <Guides />
        </Route>

        <Route path="/guides/:slug_guide/">
          <GuideDetails />
        </Route>

        <Route path="/:slug_category/:slug_product/">
          <Product />
        </Route>

        <Route path="/:slug_category/">
          <CategoryDetails />
        </Route>

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
