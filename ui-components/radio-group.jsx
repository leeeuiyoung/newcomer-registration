
export function RadioGroup({ children, defaultValue, className, onValueChange }) {
  return <div className={className}>{children}</div>;
}

export function RadioGroupItem({ value }) {
  return <input type="radio" name={value} value={value} />;
}
