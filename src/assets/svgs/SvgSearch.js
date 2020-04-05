import React from "react"
import Svg, { Path } from "react-native-svg"

const SvgSearch = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 24 24" fill={props.fill}>
			<Path
				d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
				stroke="#5E17A9"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}

SvgSearch.defaultProps = {
	style: {},
	width: 24,
	height: 24,
	fill: "none"
}

export default SvgSearch
