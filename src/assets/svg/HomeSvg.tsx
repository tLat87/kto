import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
        fill="none"
        {...props}
    >
        <Path
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M18 12v6l3 3"
        />
        <Path
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M4.575 16.5a13.5 13.5 0 1 1 .75 6m-.75 7.5v-7.5h7.5"
        />
    </Svg>
)
export default SvgComponent
