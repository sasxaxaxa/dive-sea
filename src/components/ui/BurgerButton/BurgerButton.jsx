const BurgerButton = ({isOpen, onToggle}) => {
  return (
    <button
      className={`burger ${isOpen ? "burger-open" : ""}`}
      onClick={() => onToggle(!isOpen)}
    >
      <img
        alt=''
        src="/icons/burger-button.svg"
      />
    </button>
  )
}

export default BurgerButton;