interface Color {
  color?: string;
}

export const DashedLine = ({ color = "#1E8E29" }: Color) => {
  return (
    <svg
      width="308"
      height="2"
      viewBox="0 0 308 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M307 1.00003L1 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="12 12"
      />
    </svg>
  );
};
