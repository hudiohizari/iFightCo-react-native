import React from "react"
import Svg, { Path } from "react-native-svg"

const SvgHospital = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 24 24" fill={props.fill}>
			<Path
			  fill="#5E17A9"
			  d="M18.4 10.4v2.4h3.2v-2.4h-3.2zm2.4 1.6h-1.6v-.8h1.6v.8zM18.4 13.6V16h3.2v-2.4h-3.2zm2.4 1.6h-1.6v-.8h1.6v.8zM18.4 16.8v2.4h3.2v-2.4h-3.2zm2.4 1.6h-1.6v-.8h1.6v.8zM18.4 20v2.4h3.2V20h-3.2zm2.4 1.6h-1.6v-.8h1.6v.8zM13.6 4V1.6h-3.2V4H8v3.2h2.4v2.4h3.2V7.2H16V4h-2.4zm1.6 2.4h-2.4v2.4h-1.6V6.4H8.8V4.8h2.4V2.4h1.6v2.4h2.4v1.6z"
			></Path>
			<Path
			  fill="#5E17A9"
			  d="M17.6 8.8V0H6.4v8.8H.8V24h22.4V8.8h-5.6zM6.4 23.2H1.6V9.6h4.8v13.6zm5.2 0h-2V16h2v7.2zm2.8 0h-2V16h2v7.2zm2.4 0h-1.6v-8H8.8v8H7.2V.8h9.6v22.4zm5.6 0h-4.8V9.6h4.8v13.6z"
			></Path>
			<Path
			  fill="#5E17A9"
			  d="M2.4 10.4v2.4h3.2v-2.4H2.4zM4.8 12H3.2v-.8h1.6v.8zM2.4 13.6V16h3.2v-2.4H2.4zm2.4 1.6H3.2v-.8h1.6v.8zM2.4 16.8v2.4h3.2v-2.4H2.4zm2.4 1.6H3.2v-.8h1.6v.8zM2.4 20v2.4h3.2V20H2.4zm2.4 1.6H3.2v-.8h1.6v.8z"
			></Path>
		</Svg>
	)
}

SvgHospital.defaultProps = {
	style: {},
	width: 24,
	height: 24,
	fill: "none"
}

export default SvgHospital
