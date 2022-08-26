import { useField } from "formik";

const Input = ({ label, type, isTextArea, ...props }) => {
  const [field, meta] = useField(props);
  const { name } = props;

  const showError = meta.error && meta.touched;

  const InputType = isTextArea ? "textarea" : "input";

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}:
      </label>
      <InputType
        {...field}
        {...props}
        id={name}
        type={type}
        className={`form-control ${showError ? "is-invalid" : ""}`}
      />
      {showError && <div className="invalid-feedback">{meta.error}</div>}
    </div>
  );
};

export default Input;
