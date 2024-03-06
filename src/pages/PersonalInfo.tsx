import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../state';
import {Button, FormWrapper, InputField, StepWrapper} from '../components';


function PersonalInfo() {
  const [state, setState]:any = useAppState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: state,
    mode: 'onBlur',
  });

  // TODO: Change from 'any' type
  const saveData = (data: any) => {
    setState({ ...state, ...data });
    navigate('/select-plan');
  };
  
  const registerOptions = {
    name: {
      required: 'Name is required',
    },
    email: {
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Incorrect email format',
      },
      required: 'Email is required',
    },
    tel: {
      pattern: {
        value: /^0([1-6][0-9]{8,10}|7[0-9]{9})$/,
        message: 'Incorrect phone number format',
      },
      required: 'Phone number is required',
    },
  };

  return (
    <StepWrapper
      title="Personal info"
      desc="Please provide your name, email address, and phone number.">
      <FormWrapper onSubmit={handleSubmit(saveData)}>
        <InputField
          error={errors?.name?.message}
          id="name"
          label="Name"
          name="name"
          options={registerOptions.name}
          type="text"
          register={register}
        />

        <InputField
          error={errors?.email?.message}
          id="email"
          label="Email"
          name="email"
          options={registerOptions.email}
          type="email"
          register={register}
        />

        <InputField
          error={errors?.tel?.message}
          id="tel"
          label="Phone"
          name="tel"
          options={registerOptions.tel}
          type="tel"
          register={register}
        />

        {/* TODO: Move actions wrapper elsewhere - maybe slot? */}
        <div className="form-wrapper__actions">
          <Button style="primary" type="submit">
            Next step
          </Button>
        </div>
      </FormWrapper>
    </StepWrapper>
  );
}

export default PersonalInfo;
