import * as React from "react"
import { SVGProps } from "react"
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
      d="M13.333 10.75v3.5c0 2.917-1.167 4.084-4.083 4.084h-3.5c-2.917 0-4.083-1.167-4.083-4.084v-3.5c0-2.916 1.166-4.083 4.083-4.083h3.5c2.916 0 4.083 1.167 4.083 4.083Z"
    />
    <path
      stroke="#1E3460"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 5.75v3.5c0 2.917-1.166 4.084-4.083 4.084h-.917V10.75c0-2.916-1.167-4.083-4.083-4.083H6.667V5.75c0-2.916 1.166-4.083 4.083-4.083h3.5c2.916 0 4.083 1.167 4.083 4.083Z"
    />
  </svg>
)
export default SvgComponent
