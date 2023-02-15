import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgDjLogoD = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    id="DJLogo-D_svg__Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <style>{".DJLogo-D_svg__cls-2{fill:#008cce}"}</style>
    </defs>
    <path
      d="M2.89 0h28.46a12.49 12.49 0 0 1 8.25 3 15 15 0 0 1 5 8.2c.06.23.11.46.16.69l.09.65c-.3.09-8.14.13-8.93 0-.08-.13-.17-.28-.25-.44a4.82 4.82 0 0 0-3.54-2.51 4.15 4.15 0 0 0-.61 0h-20V48H2.89Z"
      style={{
        fill: "#999",
      }}
    />
    <path
      className="DJLogo-D_svg__cls-2"
      d="M36.35 47V13.86h8.62c0 .39.06.79.06 1.18v17.97a15.66 15.66 0 0 1-3.37 10 13.31 13.31 0 0 1-5 4l-.2.08s-.04-.09-.11-.09ZM35.18 47.42a12.8 12.8 0 0 1-4.73.54V37.88a16.71 16.71 0 0 0 2.68-2.31 14.27 14.27 0 0 0 2-2.87ZM29.26 38.73V48h-4.73v-7ZM18.59 48v-5.53l4.74-1.18V48ZM12.67 43.09l4.73-.42V48h-4.73Z"
    />
  </svg>
);

export default SvgDjLogoD;
