
import classNames from "classnames";

function Input({ id, label, type, value, onChange, error, ...props }) {
  return (
    <div>
      <label htmlFor={id} style={{marginRight:"10px"}}>{label}</label>
      <input
        className={classNames("input", { valid: !error, invalid: error })}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        {...props}
      />
      {error && <p style={{ margin: ".5rem 0 0" }}>{error}</p>}
    </div>
  );
}
export default Input;