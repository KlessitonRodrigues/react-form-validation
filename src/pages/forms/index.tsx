import * as zod from 'zod';

import useForm from 'src/hooks/useForm';
import { Column } from 'src/lib/base/StyledComponents/Flex';

const formState = {
  email: '',
  password: '',
  rememberMe: false,
  termsAndConditions: false,
};

const formSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  rememberMe: zod.boolean(),
  termsAndConditions: zod.boolean(),
});

const validateForm: Hooks.FormValidationFn = (id, value, fields) => {
  const parseForm = () => {
    if (id) return formSchema.partial().safeParse({ [id]: value });
    else return formSchema.safeParse(fields);
  };

  const { success, error } = parseForm();
  return success ? '' : error?.issues[0]?.message;
};

const FormsPage = () => {
  const { fields, errorData, onChangeField } = useForm(formState, validateForm);

  return (
    <div>
      <h1>FORM</h1>

      <Column>
        <label>
          <input
            placeholder="email"
            value={fields.email}
            onChange={ev => onChangeField('email', ev.target.value)}
          />
          <b>{errorData.email}</b>
        </label>
        <label>
          <input
            placeholder="password"
            value={fields.password}
            onChange={ev => onChangeField('password', ev.target.value)}
          />
          <b>{errorData.password}</b>
        </label>
        <label>
          <input placeholder="rememberMe" />
          <b>{errorData.rememberMe}</b>
        </label>
        <label>
          <input placeholder="termsAndConditions" />
          <b>{errorData.termsAndConditions}</b>
        </label>
      </Column>
    </div>
  );
};

export const Component = FormsPage;
