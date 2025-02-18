interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={`text-white bg-[#1476ff] hover:bg-[#1476ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${props.className}`}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
};

export default Button;
