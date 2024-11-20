import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m4.025 7.675 1.333 1.333V7.675h7.25a3.418 3.418 0 0 1 3.417 3.416 3.418 3.418 0 0 1-3.416 3.417H5.942a.75.75 0 0 0 0 1.5h6.667a4.918 4.918 0 0 0 4.916-4.917 4.918 4.918 0 0 0-4.916-4.916h-7.25V4.74L3.924 6.175h-.483a.75.75 0 1 0 0 1.5h.583Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
