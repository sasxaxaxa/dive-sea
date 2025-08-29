import './Header.scss';
import Logo from "../../ui/Logo/Logo.jsx";
import Button from "../../ui/Button/Button.jsx";

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
              <li key={index} className="header__menu-item">
                <a className="header__menu-link" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <Button
            mode='black'
            location='header'
            label='добавить форму поиск'
          />
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