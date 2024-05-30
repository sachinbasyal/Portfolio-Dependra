import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import NotFoundPage from '../src/pages/NotFoundPage'
import Research from "./pages/Research";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader"
import Leadership from "./pages/Leadership";
import MediaCoverage from "./pages/MediaCoverage";
import { Toaster } from "react-hot-toast";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<>
      <Route path="/" element={<Layout />}>
        <Route path="" element={
            <>
              <Home />
              <About />
              <Portfolio />
              <Experience />
              <Contact />
              <Toaster/>
            </>
          }
        />
      </Route>
      <Route path="portfolio/research" element={<><PageHeader/><Research/><Footer/></>}/>
      <Route path="portfolio/leadership" element={<><PageHeader/><Leadership/><Footer/></>}/>
      <Route path="portfolio/media-coverage" element={<><PageHeader/><MediaCoverage/><Footer/></>}/>
      <Route path="*" element={<NotFoundPage/>}/>
      </>
    )
  );

  return (
    <RouterProvider router={router} />
    // <>
    //  <Navbar />
    //  <Home />
    //  <About />
    //  <Portfolio />
    //  <Experience />
    //  <Contact />
    //  <Footer />
    //  <Toaster />
    // </>
  );
}

export default App;
