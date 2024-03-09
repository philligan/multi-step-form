import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppState } from '../state';
import { Button, FormWrapper, InputField, StepWrapper } from '../components';
import { PersonalInfo as config } from '../config'

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

  return (
    <StepWrapper
      title={config.title}
      desc={config.desc}>
      <FormWrapper onSubmit={handleSubmit(saveData)}>
        {config.fields && config.fields.map(field => 
          <InputField
            error={errors[field.name]?.message}
            id={field.id}
            key={field.id}
            label={field.label}
            name={field.name}
            options={field.options}
            type='text'
            register={register}
          />
        )}
        {/* TODO: Move actions wrapper elsewhere - maybe slot? */}
        <div className="form-wrapper__actions">
          <Button style="primary" type="submit">
            {config.ctaPrimary}
          </Button>
        </div>
      </FormWrapper>
    </StepWrapper>
  );
}

export default PersonalInfo;
