import {Credentials} from '@/models/sessionInterfaces'

export interface Input {
  initialValues: Credentials,
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: Credentials
}