import { StyledFieldSet } from "./style";

export const Input = ({
  label,
  type,
  placeholder,
  id,
  register,
  disabled,
  error,
}) => {
  return (
    <StyledFieldSet>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        disabled={disabled}
      />
      {error}
    </StyledFieldSet>
  );
};
