// import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Image from './Components/Image';
import FeaturedArticles from './Components/FeaturedArticles';
import HeadingFA from './Components/HeadingFA';
import SeeArticles from './Components/SeeArticles';
import FTHeading from './Components/FTHeading';
import FeaturedTutorials from './Components/FeaturedTutorials';
import SeeTutorials from './Components/SeeTutorials';
import Signup from './Components/SignUp';
import Footer from './Components/Footer';
function App() {
  return (
      <>
      <Header/>
      <Image/>
      <HeadingFA/>
      <FeaturedArticles/>
      <SeeArticles/>
      <FTHeading/>
      <FeaturedTutorials/>
      <SeeTutorials/>
      <Signup/>
      <Footer/>
      </>
  );
}

export default App;

