import {Link} from 'react-router-dom'
import './index.css'
// Write your JS code here
const Header = () => (
  <div className="nav-bar">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <p className="wave-name">Wave</p>
    </div>
    <div>
      <Link to="/" className="name">
        Home
      </Link>
      <Link to="/about" className="name">
        About
      </Link>
      <Link to="/contact" className="name">
        Contact
      </Link>
    </div>
  </div>
)

export default Header
