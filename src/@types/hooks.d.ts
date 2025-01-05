declare namespace Hooks {
  type ThemeColors = 'indigo' | 'blue' | 'purple' | 'magenta' | 'green';

  type UseThemeCtx = {
    isDark: boolean;
    color: ThemeColors;
    setDark: (value: boolean) => any;
    setColor: (value: ThemeColors) => any;
    toggleColor: () => void;
  };

  type FormValidationFn = (id?: string, value?: string, fields?: string) => void;

  type UseForm = <T>(
    state: T,
    onValidate: FormValidationFn,
  ) => {
    fields: T;
    editData: T;
    errorData: T;
    setFields: React.Dispatch<T>;
    setEditData: React.Dispatch<T>;
    setErrorData: React.Dispatch<T>;
    onChangeField: (name: keyof T, value: string) => void;
  };
}
