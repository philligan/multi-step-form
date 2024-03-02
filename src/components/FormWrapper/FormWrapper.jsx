import './FormWrapper.scss';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import { useForm } from "react-hook-form";

function FormWrapper() {
  const { register, handleSubmit, formState: { errors }  } = useForm({
    mode: "onBlur"
  });
  const onFormSubmit  = data => console.log(data);
  const onErrors = errors => console.error(errors);
  
  const registerOptions = {
    name: { 
      required: "Name is required"
    },
    email: { 
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Incorrect email format"
      },
      required: "Email is required"
    },
    tel: {
      pattern: {
        value: /^0([1-6][0-9]{8,10}|7[0-9]{9})$/,
        message: "Incorrect phone number format"
      },
      required: "Phone number is required",      
    }
  }

  return (
    <form className="form-wrapper" onSubmit={handleSubmit(onFormSubmit, onErrors)} noValidate>
      <InputField
        error={errors?.name?.message}
        id="name"
        label="Name"
        name="name"
        options={registerOptions.name}
        type="text"
        register={register} />

      <InputField
        error={errors?.email?.message}
        id="email"
        label="Email"
        name="email"
        options={registerOptions.email}
        type="email"
        register={register} />

      <InputField
        error={errors?.tel?.message}
        id="tel"
        label="Phone"
        name="tel"
        options={registerOptions.tel}
        type="tel"
        register={register} />

      <div className="form-wrapper__actions">        
        <Button type="submit">Next step</Button>
      </div>
    </form>
  )
}

export default FormWrapper;
