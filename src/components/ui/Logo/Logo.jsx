import PropTypes from 'prop-types';

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
        width={53}
        height={53}
      />
    </a>
  )
}

Logo.propTypes = {
  href: PropTypes.string,
  mode: PropTypes.string,
};

export default Logo;