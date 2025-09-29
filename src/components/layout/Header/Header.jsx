import './Header.scss';
import Logo from "../../ui/Logo/Logo.jsx";
import Button from "../../ui/Button/Button.jsx";
import {Link} from 'react-router-dom';
import {useState} from "react";
import BurgerButton from "../../ui/BurgerButton/BurgerButton.jsx";

const headerLinks = [
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

const overlayLinks = [
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`header header-container ${isOpen ? 'open' : ''}`}>
      <div className="header__inner">
        <div className="header__logo">
          <Logo
            mode='black'
          />
        </div>
        <div className="header__overlay-logo">
          DiveSea
        </div>
        <nav className="header__menu">
          <ul className="header__menu-list">
            {headerLinks.map(({label, href}, index) => (
              <li key={index} className="header__menu-item">
                <Link
                  className="header__menu-link"
                  to={href}>
                  {label}
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
              className="header__form-icon"
              src="src/assets/search.svg"
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
        <div className="header__burger">
          <BurgerButton
            isOpen={isOpen}
            onToggle={setIsOpen}
          />
        </div>
      </div>
      <div className={`header__overlay ${isOpen ? 'active' : ''}`}>
        <nav className="header__overlay__nav">
          <ul className="header__overlay__nav-list">
            {overlayLinks.map(({label, href}, index) => (
              <li key={index} className="header__overlay__nav-item">
                <Link
                  to={href}
                  className="header__overlay__nav-link"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;