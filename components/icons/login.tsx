import * as React from "react";
import clsx from "clsx";

interface LoginIconProps extends React.SVGProps<SVGSVGElement> {}
export function LoginIcon(props: LoginIconProps) {
  return (
    <svg
      className={clsx(props.className)}
      fill="currentColor"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 1.25h-.143c-1.258 0-2.06 0-2.736.205A4.75 4.75 0 007.455 4.62c-.205.677-.205 1.48-.205 2.737V8a.75.75 0 001.5 0v-.5c0-1.45.008-2.009.14-2.443a3.25 3.25 0 012.167-2.167c.434-.132.993-.14 2.443-.14h2.1c1.133 0 1.937 0 2.566.052.62.05 1.005.147 1.31.302a3.25 3.25 0 011.42 1.42c.155.305.251.69.302 1.31.051.63.052 1.434.052 2.566v7.2c0 1.133 0 1.937-.052 2.566-.05.62-.147 1.005-.302 1.31a3.25 3.25 0 01-1.42 1.42c-.305.155-.69.251-1.31.302-.63.051-1.433.052-2.566.052h-2.1c-1.45 0-2.009-.008-2.443-.14a3.25 3.25 0 01-2.167-2.167c-.132-.434-.14-.993-.14-2.443V16a.75.75 0 00-1.5 0v.643c0 1.258 0 2.06.205 2.736a4.75 4.75 0 003.166 3.166c.676.205 1.478.205 2.736.205h2.276c1.092 0 1.958 0 2.655-.057.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 002.075-2.076c.281-.552.403-1.155.461-1.869.057-.697.057-1.563.057-2.655V8.367c0-1.092 0-1.958-.057-2.655-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 00-2.076-2.076c-.552-.281-1.155-.403-1.869-.461-.697-.057-1.563-.057-2.655-.057H13.5zm.03 6.22a.75.75 0 10-1.06 1.06l2.72 2.72H2a.75.75 0 000 1.5h13.19l-2.72 2.72a.75.75 0 101.06 1.06l4-4a.75.75 0 000-1.06l-4-4z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default LoginIcon;
