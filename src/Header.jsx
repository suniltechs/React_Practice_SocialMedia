
import { useContext } from 'react';
import DataContexts from '../contexts/DataContext';
import {FaMobile, FaLaptop, FaTablet} from 'react-icons/fa'

const Header = () => {
  const {title,width } = useContext(DataContexts);
  return (
    <header className="Header">
      <h1>{title}</h1>
      {width < 768 ? <FaMobile/>
        : width < 992 ? <FaTablet/>
          : <FaLaptop/>}
    </header>
  )
}

export default Header