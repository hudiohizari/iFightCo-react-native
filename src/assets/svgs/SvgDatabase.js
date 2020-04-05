import React from "react"
import Svg, { Path } from "react-native-svg"

const SvgDatabase = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 24 24" fill={props.fill}>
			<Path
				d="M9 8c4.418 0 8-1.567 8-3.5S13.418 1 9 1 1 2.567 1 4.5 4.582 8 9 8zM15 12c0 1.66-2.667 3-6 3s-6-1.34-6-3"
				stroke="#5E17A9"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M1 4v15.647C1 21.502 4.556 23 9 23s8-1.498 8-3.353V4"
				stroke="#5E17A9"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}

SvgDatabase.defaultProps = {
	style: {},
	width: 24,
	height: 24,
	fill: "none"
}

export default SvgDatabase
