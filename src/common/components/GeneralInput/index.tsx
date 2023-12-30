import {Input} from '@/models/interfaceInput'

export const GeneralInputs= ({
  initialValues,
  handleBlur,
  handleChange,
  values,
}: Input) => {
  const numberInputs = Object.keys(initialValues);
  return numberInputs.map((name, index) => (
    <input
      key={index}
      name={name}
      type="text"
      placeholder={name}
      onBlur={handleBlur}
      onChange={handleChange}
      value={values[name]}
      style={{color: 'black', padding: 5}}
    />
  ));
};