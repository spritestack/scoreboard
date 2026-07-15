type SportButtonProps = {
  selected: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function SportButton({
  selected,
  children,
  className = "",
  ...props
}: SportButtonProps) {
  return (
    <button
      type="button"
      className={`
        p-3
        transition
        text-gray-500
        rounded-xs
        border-1
        border-gray-500
        text-sm
        ${
          selected
            ? "text-orange-500 border-orange-500"
            : "hover:bg-gray-900"
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}