import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppState } from '../state';
import {
  ActionWrapper,
  Button,
  CheckboxField,
  FieldGroup,
  FormWrapper,
  Hyperlink,
  StepWrapper,
} from '../components';
import { AddOns as config } from '../config';
import { CurrencyFormat } from '../helpers';
import { FieldProps } from '../types';

function AddOns() {
  const [state, setState]: any = useAppState();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: state,
    mode: 'onSubmit',
  });
  const saveData = (data: {}) => {
    setState({ ...state, ...data });
    navigate('/summary');
  };

  function cost(field: FieldProps) {
    if (state.toggle === 'yearly') {
      return <>+{CurrencyFormat(field.costYearly)}</>;
    }
    return <>+{CurrencyFormat(field.costMonthly)}</>;
  }

  return (
    <StepWrapper title={config.title} desc={config.desc}>
      <FormWrapper onSubmit={handleSubmit(saveData)}>
        <FieldGroup direction="col" legend="Add-on options">
          {config.fields &&
            config.fields.map((field) => (
              <CheckboxField
                cost={cost(field)}
                id={field.id}
                key={field.id}
                label={field.label}
                desc={field.desc}
                name={field.name}
                register={register}
                value={field.value}
              />
            ))}
        </FieldGroup>
        <ActionWrapper>
          <Hyperlink href="/select-plan">{config.ctaSecondary}</Hyperlink>
          <Button style="primary" type="submit">
            {config.ctaPrimary}
          </Button>
        </ActionWrapper>
      </FormWrapper>
    </StepWrapper>
  );
}

export default AddOns;
