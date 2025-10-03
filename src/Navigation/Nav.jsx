import{FiHeart} from 'react-icons/fi'
import { FaShoppingBag } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import "./Nav.css";

const Nav = () => {
  return(
    <nav className="nav-container">
      <input 
      type='text' 
      className='search-input' 
      placeholder='Enter your search shoes' 
      />
    
    <div className="profile-container">
      <a href='#'>
        <FiHeart className='nav-icons'/></a>

        <a href=''>
          <FaShoppingBag className="nav-icons"/>

        </a>

        <a href='#'>
          <FaUser className='nav-icons' />
        </a>
    </div>
  </nav>
  )
}

export default Nav
