
export function Calendar({ selected, onSelect, className }) {
  return (
    <input
      type="date"
      value={selected.toISOString().substring(0, 10)}
      onChange={(e) => onSelect(new Date(e.target.value))}
      className={className}
    />
  );
}
