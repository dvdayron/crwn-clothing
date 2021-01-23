import './form-input.styles.scss';

function FormInput({handleChange, label, ...otherSectionProps}) {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherSectionProps}/>
      {
        label ? 
        (<label className={`${otherSectionProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
        : null
      }
    </div>
  )
}

export default FormInput; 