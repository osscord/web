export default function Spinner({ size = 5 }) {
  return (
    <svg
      className={`animate-spin w-${size} h-${size}`}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3.5A6.5 6.5 0 0 0 3.5 10 .75.75 0 0 1 2 10a8 8 0 1 1 8 8 .75.75 0 0 1 0-1.5 6.5 6.5 0 1 0 0-13Z"
        fill="#ff66ab"
      />
    </svg>
  );
}
