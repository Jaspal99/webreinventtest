// src/components/Button.tsx
interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
  }
  
  const Button = ({ type = 'button', children }: ButtonProps) => (
    <button
      type={type}
      className="w-full p-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
    >
      {children}
    </button>
  );
  
  export default Button;
  