export const BigNumeral = ({ children, className = '' }) => {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none font-black leading-none text-[#F0F0F0] ${className}`}
    >
      {children}
    </span>
  );
};
