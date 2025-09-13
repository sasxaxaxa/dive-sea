import './Button.scss';
import classnames from 'classnames';
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    label,
    mode = 'black',
    location = '',
    href,
    iconName,
  } = props;

  const title = label ? label : ''
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href }
  const specificProps = isLink ? linkProps : undefined

   const iconComponent = typeof iconName === 'string'
    ? <img className="button__icon" src={iconName} alt="" />
    : iconName

  return (
    <Component
      className={classnames(
        'button',
        `button-${mode}`,
        `button-${location}`
      )}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {iconComponent}
      {title}
    </Component>
  
  )
}

Button.propTypes = {
  label: PropTypes.string,
  location: PropTypes.string,
  isLabelHidden: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['before', 'after']),
  iconName: PropTypes.string,
  mode: PropTypes.string,

}

export default Button;