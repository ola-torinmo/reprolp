import NavbarComp from './component/NavbarComp';
import JumComp from './component/JumComp';
import FooterComp from './component/FooterComp';
import ValueComp from './component/ValueComp';
import Services from './component/Services';
import BlogComp from './component/BlogComp';
import 'bootstrap/dist/css/bootstrap.min.css';  
// import './App.css';

function App() {
  return (
    <>
    <NavbarComp/> 
    <JumComp/>
    <ValueComp/>
    <Services/>
    <BlogComp/>
    <FooterComp/>
    
    </>
  );
}

export default App;
