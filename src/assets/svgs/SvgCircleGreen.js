import React from "react"
import Svg, { Circle } from "react-native-svg"

const SvgCircleGreen = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 24 24" fill={props.fill}>
			<Circle
				cx={12}
				cy={12}
				r={11.5}
				fill="#4C9A2A"
				fillOpacity={0.5}
				stroke="#4C9A2A" />
		</Svg>
	)
}

SvgCircleGreen.defaultProps = {
	style: {},
	width: 24,
	height: 24,
	fill: "none"
}

export default SvgCircleGreen
