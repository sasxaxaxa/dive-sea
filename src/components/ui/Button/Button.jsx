import './Button.scss';
import classnames from 'classnames';
import PropTypes from "prop-types";

const Button = ({children, mode = 'black', location=''}) => {
  return (
    <button
      className={classnames(
        'button',
        `button-${mode}`,
        `button-${location}`
      )}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['black', 'white']),
  location: PropTypes.string,
}

export default Button;