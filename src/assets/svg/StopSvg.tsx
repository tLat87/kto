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
            fill="#fff"
            d="M3 9c0-2.829 0-4.242.879-5.121C4.758 3 6.171 3 9 3c2.829 0 4.242 0 5.121.879C15 4.758 15 6.171 15 9v18c0 2.829 0 4.242-.879 5.121C13.242 33 11.829 33 9 33c-2.829 0-4.242 0-5.121-.879C3 31.242 3 29.829 3 27V9Z"
        />
        <Path
            fill="#fff"
            d="M21 9c0-2.829 0-4.242.879-5.121C22.758 3 24.171 3 27 3c2.829 0 4.242 0 5.121.879C33 4.758 33 6.171 33 9v18c0 2.829 0 4.242-.879 5.121C31.242 33 29.829 33 27 33c-2.829 0-4.242 0-5.121-.879C21 31.242 21 29.829 21 27V9Z"
            opacity={0.5}
        />
    </Svg>
)
export default SvgComponent
