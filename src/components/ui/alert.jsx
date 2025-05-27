
export function Alert({ children, className }) {
  return <div className={className}>{children}</div>;
}

export function AlertTitle({ children }) {
  return <strong>{children}</strong>;
}

export function AlertDescription({ children }) {
  return <p>{children}</p>;
}
