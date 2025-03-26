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
            fillRule="evenodd"
            d="M34.5 18c0-1.552-.795-3.105-2.386-3.97L12.896 3.578C9.8 1.896 6 4.086 6 7.55V18h28.5Z"
            clipRule="evenodd"
        />
        <Path
            fill="#fff"
            d="m12.896 32.422 19.218-10.451A4.485 4.485 0 0 0 34.5 18H6v10.45c0 3.466 3.801 5.654 6.896 3.973Z"
            opacity={0.5}
        />
    </Svg>
)
export default SvgComponent
