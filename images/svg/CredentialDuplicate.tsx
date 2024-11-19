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
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <path d="M6.667 13.333H4.524c-1.909 0-2.859-.95-2.859-2.859v-5.95c0-1.908.95-2.858 2.859-2.858h3.808c1.909 0 2.858.95 2.858 2.858" />
      <path d="M15.475 18.333h-3.809c-1.908 0-2.858-.95-2.858-2.859v-5.95c0-1.908.95-2.858 2.858-2.858h3.809c1.908 0 2.858.95 2.858 2.858v5.95c0 1.909-.95 2.859-2.858 2.859ZM12.392 12.5h2.716M13.75 13.86v-2.717" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
