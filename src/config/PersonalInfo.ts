const PersonalInfo = {
  ctaPrimary: 'Next Step',
  desc: 'Please provide your name, email address, and phone number.',
  fields: [
    {
      id: 'name',
      label: 'Name',
      name: 'name',
      options: {
        required: 'Name is required',
      },
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      name: 'email',
      options: {
        pattern: {
          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: 'Incorrect email format',
        },
        required: 'Email is required',
      },
      type: 'email',
    },
    {
      id: 'tel',
      label: 'Phone',
      name: 'tel',
      options: {
        pattern: {
          value: /^0([1-6][0-9]{8,10}|7[0-9]{9})$/,
          message: 'Incorrect phone number format',
        },
        required: 'Phone number is required',
      },
      type: 'tel',
    },
  ],
  title: 'Personal info',
};

export default PersonalInfo;
