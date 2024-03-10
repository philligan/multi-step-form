interface PatternProps {
  value?: RegExp;
  message?: string;
}

interface InputOptionsProps {
  pattern?: PatternProps;
  required: string;
}

interface InputFieldProps {
  error?: any;
  id: string;
  label: string;
  name: string;
  options: InputOptionsProps;
  register: any;
  type: 'text' | 'email' | 'tel' | undefined;
}

export default InputFieldProps;
