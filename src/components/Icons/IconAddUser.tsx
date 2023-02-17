import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconAddUser = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle
      cx={12}
      cy={8}
      r={4}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.327 15.076C12.889 15.026 12.445 15 12 15c-1.92 0-3.806.474-5.369 1.373-1.562.9-2.75 2.197-3.3 3.738a1 1 0 0 0 1.883.672c.362-1.01 1.182-1.967 2.415-2.676 1.014-.584 2.235-.957 3.529-1.07a3.005 3.005 0 0 1 2.169-1.961Z"
      fill="currentColor"
    />
    <path
      d="M18 14v8M22 18h-8"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgIconAddUser;
