interface Option {
  label: string;
  id: string;
  name: string;
  value: string;
}

interface ToggleProps {
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  optionOne: Option;
  optionTwo: Option;
  register: any;
}

export default ToggleProps;
