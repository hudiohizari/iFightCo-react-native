import React from "react"
import Svg, { Path } from "react-native-svg"

const SvgBarChart = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 24 24" fill={props.fill}>
			<Path
				d="M12 20V10M18 20V4M6 20v-4"
				stroke="#5E17A9"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}

SvgBarChart.defaultProps = {
	style: {},
	width: 24,
	height: 24,
	fill: "none"
}

export default SvgBarChart
