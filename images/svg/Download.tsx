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
      d="M7.5 9.167v5L9.167 12.5M7.5 14.167 5.833 12.5"
    />
    <path
      stroke="#1E3460"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 8.334V12.5c0 4.167-1.666 5.834-5.833 5.834h-5c-4.167 0-5.833-1.667-5.833-5.834v-5c0-4.166 1.666-5.833 5.833-5.833h4.166"
    />
    <path
      stroke="#1E3460"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 8.334H15c-2.5 0-3.334-.834-3.334-3.334V1.667l6.667 6.667Z"
    />
  </svg>
)
export default SvgComponent
