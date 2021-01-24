import './custom-button.styles.scss';

function CustomButton({children, isGoogleSignIn, inverted, ...otherSectionProps}) {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...otherSectionProps}>
      {children}
    </button>
  )
}

export default CustomButton;  