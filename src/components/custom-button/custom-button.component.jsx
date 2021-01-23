import './custom-button.styles.scss';

function CustomButton({children, isGoogleSignIn, ...otherSectionProps}) {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherSectionProps}>
      {children}
    </button>
  )
}

export default CustomButton;  