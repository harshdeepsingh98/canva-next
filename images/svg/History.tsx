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
      d="M18.333 10c0 4.6-3.733 8.333-8.333 8.333a8.336 8.336 0 0 1-8.333-8.334C1.667 5.4 5.4 1.666 10 1.666s8.333 3.733 8.333 8.333Z"
    />
    <path
      stroke="#1E3460"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.092 12.65-2.583-1.542c-.45-.267-.817-.909-.817-1.434V6.258"
    />
  </svg>
)
export default SvgComponent
