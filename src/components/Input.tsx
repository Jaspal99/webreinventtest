// src/components/Input.tsx
interface InputProps {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
  }
  
  const Input = ({ type, value, onChange, placeholder }: InputProps) => (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 mt-2 border rounded-md"
    />
  );
  
  export default Input;
  