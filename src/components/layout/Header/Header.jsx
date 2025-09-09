import './Header.scss';
import Logo from "../../ui/Logo/Logo.jsx";
import Button from "../../ui/Button/Button.jsx";
import { Link } from 'react-router-dom';

const navItems = [
  {
    label: 'Discover',
    href: '/discover',
  },
  {
    label: 'Creators',
    href: '/creators',
  },
  {
    label: 'Sell',
    href: '/sell',
  },
  {
    label: 'Stats',
    href: '/stats',
  },
]

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo
          mode='black'
        />
        <nav className="header__menu">
          <ul className="header__menu-list">
            {navItems.map(({label, href}, index) => (
              <li key={index}>
                <Link
                  className="header__menu-link"
                  to={href}>{label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <form
            className="header__form"
            action="/search" method="get">
            <img
              src="src/assets/search.svg"
              width="22px"
              height="22px"
            />
            <input
              className="header__form-input"
              type="text"
              name="query"
              placeholder="Search Art Work / Creator"/>
          </form>
          <Button
            mode='black'
            location='header'
            label='Connect Wallet'
          />
        </div>
      </div>
    </header>
  )
}

export default Header;