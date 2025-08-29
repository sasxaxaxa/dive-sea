import './Button.scss';
import classnames from 'classnames';
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    label,
    mode = 'black',
    location = '',
    // hasFillIcon = false,
    isLabelHidden = false,
    iconPosition = 'before',
    iconName,
  } = props;

  const title = isLabelHidden ? undefined : label

  const iconComponent = iconName &&
    <img
      src={iconName}
      alt=''
    />

  return (
    <button
      className={
        classnames(
          'button',
          `button-${mode}`,
          `button-${location}`
        )}>
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className="button__label">{title}</span>
      )}
      {iconPosition === 'after' && iconComponent}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  mode: PropTypes.oneOf(['black', 'white']),
  location: PropTypes.string,
  // hasFillIcon: PropTypes.bool,
  isLabelHidden: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['before', 'after']),
  iconName: PropTypes.string,

}

export default Button;