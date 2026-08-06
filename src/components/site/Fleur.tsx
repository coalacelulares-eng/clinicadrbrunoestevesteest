export function Fleur({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <path d="M24 4c-3.2 5.4-3.2 10.6 0 15.9 3.2-5.3 3.2-10.5 0-15.9Z" />
      <path d="M24 19.9c-4.6-3.5-9.4-3.6-13.7 0 3.9 3.9 8.4 4.7 13.7 2.6" />
      <path d="M24 19.9c4.6-3.5 9.4-3.6 13.7 0-3.9 3.9-8.4 4.7-13.7 2.6" />
      <path d="M24 22.5V44" />
      <path d="M16.5 33.5h15" />
    </svg>
  );
}
