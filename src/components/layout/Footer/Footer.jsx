import './Footer.scss'
import Logo from "../../ui/Logo/Logo.jsx";

const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
<g fill="#535353" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.33333,5.33333)"><path d="M20.5,46c-1.378,0 -2.5,-1.121 -2.5,-2.5v-17.5l-4.45,0.003c-1.367,0 -2.489,-1.11 -2.501,-2.476l-0.029,-3.003c-0.006,-0.673 0.25,-1.306 0.724,-1.783c0.472,-0.478 1.103,-0.741 1.776,-0.741h4.48v-4.5c0,-6.746 3.442,-10.462 9.691,-10.462c2.472,0 4.63,0.175 4.65,0.177c0.965,0.086 1.691,0.88 1.691,1.847v4.57c0,1.022 -0.832,1.854 -1.854,1.854h-2.908c-1.217,0 -2.208,0.99 -2.208,2.208l-0.056,4.306h4.438c0.713,0 1.393,0.306 1.867,0.838c0.474,0.532 0.699,1.243 0.616,1.951l-0.349,3c-0.146,1.261 -1.214,2.211 -2.482,2.211h-4.096v17.5c0,1.379 -1.122,2.5 -2.5,2.5z"></path></g></g>
</svg>

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
    iconName: '/src/assets/instagram.svg',
    href: '/',
  },
  {
    label: 'LinkedIn',
    iconName: '/src/assets/linked-in.svg',
    href: '/',
  },
  {
    label: 'Facebook',
    iconName: '/src/assets/facebook.svg',
    href: '/',
  },
  {
    label: 'Twitter',
    iconName: '/src/assets/twitter.svg',
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
                  <img 
                  src = {iconName}
                  />
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