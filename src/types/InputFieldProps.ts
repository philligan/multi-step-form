// import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface InputFieldProps {
  // error: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  error: any; // TODO: Change from 'any' type
  id: string;
  label: string;
  name: string;
  options: any; // TODO: Change from 'any' type
  register: any; // TODO: Change from 'any' type
  type: 'text' | 'email' | 'tel' | undefined;
}

export default InputFieldProps;
