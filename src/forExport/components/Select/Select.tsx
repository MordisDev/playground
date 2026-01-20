export type SelectProps = {
  label?: string;
  id: string;
  name: string;
  items: {
    value: string;
    label: string;
  }[];
};

export const Select = ({ label, id, name, items }: SelectProps) => (
  <>
    {label && <label htmlFor={id}>{label}</label>}
    <select name={name} id={id}>
      {items.map((item, key) => (
        <option value={item.value} key={key}>
          {item.label}
        </option>
      ))}
    </select>
  </>
);
