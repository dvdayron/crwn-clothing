import {AppCustomButton} from './custom-button.styles';

function CustomButton({children, ...otherSectionProps}) {
  return (
    <AppCustomButton {...otherSectionProps}>
      {children}
    </AppCustomButton>
  )
}

export default CustomButton;  