import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Newpost from './Newpost';
import Postpage from './Postpage';
import Missing from './Missing';
import Footer from './Footer';
import About from './About';
import EditPost from './EditPost';
import { DataProvider } from '../contexts/DataContext';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <main className='App'>
      <DataProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='newpost' element={<Newpost/>} />
          <Route path='/postpage/:id' element={<Postpage />} />
          <Route path='/edit/:id' element={<EditPost />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </main>
  );
}

export default App;