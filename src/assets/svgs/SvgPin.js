import React from "react"
import Svg, { Path } from "react-native-svg"

const SvgPin = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 24 24" fill={props.fill}>
			<Path
				d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
				stroke="#828282"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M12 13a3 3 0 100-6 3 3 0 000 6z"
				stroke="#828282"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}

SvgPin.defaultProps = {
	style: {},
	width: 24,
	height: 24,
	fill: "none"
}

export default SvgPin
