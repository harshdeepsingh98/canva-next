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
      stroke="#1E3460"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.167 14.167 1.667-1.666-1.667-1.667 1.667 1.667h-5"
    />
    <path
      stroke="#1E3460"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 8.333v4.166c0 4.167-1.666 5.834-5.833 5.834h-5c-4.167 0-5.833-1.667-5.833-5.834v-5c0-4.166 1.666-5.833 5.833-5.833h4.166"
    />
    <path
      stroke="#1E3460"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 8.333H15c-2.5 0-3.334-.834-3.334-3.334V1.666l6.667 6.667Z"
    />
  </svg>
)
export default SvgComponent
