import './FormWrapper.scss';

// TODO: Change from 'any' type
function FormWrapper(props: any) {
  return (
    <form className="form-wrapper" {...props} noValidate></form>
  )
}

export default FormWrapper;
