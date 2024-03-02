import './FormWrapper.scss';

function FormWrapper(props) {
  return (
    <form className="form-wrapper" {...props} noValidate></form>
  )
}

export default FormWrapper;
