import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type StyledInputProps = {
  type: string;
  label: string;
  error?: FieldError;
  className?: string;
  register: UseFormRegisterReturn;
};

const StyledInput = ({
  register,
  type,
  label,
  error,
  className,
}: StyledInputProps) => {
  return (
    <div className={`${className} text-left`}>
      <input
        {...register}
        type={type}
        placeholder={label}
        className="formField"
      />
      {error?.message && (
        <span className="left-0 bottom-0 text-red-500">{error.message}</span>
      )}
    </div>
  );
};

export default StyledInput;
