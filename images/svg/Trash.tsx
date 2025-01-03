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
      d="M17.5 4.983a84.752 84.752 0 0 0-8.35-.417c-1.65 0-3.3.084-4.95.25l-1.7.167M7.083 4.142l.184-1.092C7.4 2.26 7.5 1.667 8.908 1.667h2.184c1.408 0 1.516.625 1.641 1.392l.184 1.083M15.708 7.616l-.542 8.392c-.091 1.308-.166 2.325-2.491 2.325h-5.35c-2.325 0-2.4-1.017-2.492-2.325l-.542-8.392M8.608 13.75h2.775M7.917 10.417h4.166"
    />
  </svg>
)
export default SvgComponent
