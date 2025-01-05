import { useState } from 'react';

const useForm: Hooks.UseForm = (initialData, validationFn) => {
  const [fields, setFields] = useState<any>(initialData);
  const [editData, setEditData] = useState<any>({});
  const [errorData, setErrorData] = useState<any>({});

  const onChangeField = (name: keyof typeof initialData, value: string) => {
    if (validationFn) {
      setErrorData({ ...errorData, [name]: validationFn(name as string, value, fields) });
    }
    setFields({ ...fields, [name]: value });
  };

  return {
    fields,
    editData,
    errorData,
    setFields,
    setEditData,
    setErrorData,
    onChangeField,
  };
};

export default useForm;
