import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionNumberedList = ({
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
    <path
      d="M10 8h7M10 12h7M10 16h7"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M7.523 6.09V9h-.615V6.675H6.89l-.666.417v-.545l.72-.456h.578ZM5.976 13v-.443l1.036-.959c.088-.085.161-.162.221-.23a.873.873 0 0 0 .138-.2.497.497 0 0 0 .047-.215.382.382 0 0 0-.217-.364.498.498 0 0 0-.23-.05.48.48 0 0 0-.232.053.372.372 0 0 0-.154.155.502.502 0 0 0-.054.24h-.583a.863.863 0 0 1 .491-.821c.155-.077.334-.115.537-.115.208 0 .39.037.544.11a.863.863 0 0 1 .362.305c.086.13.13.278.13.446 0 .11-.022.218-.066.325a1.36 1.36 0 0 1-.228.357 5.28 5.28 0 0 1-.465.467l-.425.416v.02H8.05V13H5.976ZM6.993 17.04c-.212 0-.401-.037-.567-.11a.967.967 0 0 1-.39-.304.764.764 0 0 1-.147-.448h.62a.323.323 0 0 0 .069.187.428.428 0 0 0 .173.124c.072.029.153.044.243.044a.589.589 0 0 0 .249-.05.408.408 0 0 0 .169-.138.348.348 0 0 0 .06-.203.34.34 0 0 0-.065-.206.418.418 0 0 0-.184-.142.718.718 0 0 0-.284-.051h-.272v-.452h.272a.59.59 0 0 0 .245-.048.396.396 0 0 0 .168-.134.347.347 0 0 0 .06-.201.349.349 0 0 0-.198-.323.564.564 0 0 0-.445-.001.4.4 0 0 0-.165.126.333.333 0 0 0-.067.193h-.59a.758.758 0 0 1 .144-.443.932.932 0 0 1 .375-.3c.158-.072.336-.109.535-.109.201 0 .377.037.527.11.15.072.268.17.351.295a.709.709 0 0 1 .125.415c.001.163-.05.298-.152.407a.692.692 0 0 1-.396.208v.022c.214.028.377.102.488.224a.63.63 0 0 1 .168.451.71.71 0 0 1-.143.442.96.96 0 0 1-.397.304c-.168.074-.361.11-.58.11Z"
      fill="#373F50"
    />
  </svg>
);

export default SvgActionNumberedList;
