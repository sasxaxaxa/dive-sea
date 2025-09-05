import './Footer.scss'
import Logo from "../../ui/Logo/Logo.jsx";

const footerItems = [
  {
    label: 'Privacy Policy',
    href: '/',
  },
  {
    label: 'Term & Conditions',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/',
  },
]

const socials = [
  {
    label: 'Instagram',
    iconName: '',
    href: '/',
  },
  {
    label: 'LinkedIn',
    iconName: '',
    href: '/',
  },
  {
    label: 'Facebook',
    iconName: '',
    href: '/',
  },
  {
    label: 'Twitter',
    iconName: '',
    href: '/',
  }
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__row-first">
          <Logo
            mode='white'
            className="footer__logo"
          />
          <p className="footer__logo-name">DiveSea</p>
          <ul className="footer__menu-list">
            {footerItems.map(({label, href}, index) => (
              <li
                key={index}>
                <a className="footer__menu-link" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__row-second">
          <p className="footer__copyright">
            © 2023 EATLY All Rights Reserved.
          </p>
          <ul className="footer__social-list">
            {socials.map(({label, iconName, href}, index) => (
              <li
                key={index}
                className={"footer__social-item"}
              >
                <a
                  className="footer__social-link"
                  href={href}
                  aria-label={label}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </footer>
  )
}

export default Footer;