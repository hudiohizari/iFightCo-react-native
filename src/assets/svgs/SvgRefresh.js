import React from "react"
import Svg, { Path } from "react-native-svg"

const SvgRefresh = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 24 24" fill={props.fill}>
			<Path
				d="M21 6v5h-5M3 19v-5h5"
				stroke="#828282"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M5.06 10a7.51 7.51 0 012.057-3.105 7.35 7.35 0 013.278-1.71 7.28 7.28 0 013.684.11A7.366 7.366 0 0117.25 7.2M3 14.167l3.81 3.634a7.366 7.366 0 003.172 1.904 7.28 7.28 0 003.683.11 7.349 7.349 0 003.278-1.71A7.51 7.51 0 0019 15.001"
				stroke="#828282"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	)
}

SvgRefresh.defaultProps = {
	style: {},
	width: 24,
	height: 24,
	fill: "none"
}

export default SvgRefresh
