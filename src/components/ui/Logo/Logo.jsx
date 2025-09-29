import PropTypes from 'prop-types';
import classNames from "classnames";

const title = 'Home'

const Logo = ({href = '/', mode=''}) => {
  const logoPath = `src/assets/logo-${mode}.svg`;

  return (
    <a
      href={href}
      className="logo"
      title={title}
      aria-label={title}
    >
      <img
        src={logoPath}
        alt="Dive sea logo"
      />
    </a>
  )
}

Logo.propTypes = {
  href: PropTypes.string,
  mode: PropTypes.string,
};

export default Logo;