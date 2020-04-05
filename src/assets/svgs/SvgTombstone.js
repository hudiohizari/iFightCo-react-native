import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgTombstone = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 24 24" fill={props.fill}>
			<G clip-path="url(#clip0)">
			  <Path
				fill="#B0BEC5"
				d="M12.016 0c-4.411 0-8 3.589-8 8v13.5a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V8c0-4.41-3.59-8-8-8z"
			  ></Path>
			  <Path
				fill="#6BD2EF"
				d="M21.516 21h-19a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5z"
			  ></Path>
			  <Path
				fill="#000"
				d="M19.516 22h-15a.5.5 0 01-.5-.5V8c0-4.41 3.589-8 8-8 4.41 0 8 3.589 8 8v13.5a.5.5 0 01-.5.5zm-14.5-1h14V8c0-3.86-3.141-7-7-7-3.86 0-7 3.14-7 7v13z"
			  ></Path>
			  <Path
				fill="#000"
				d="M21.516 24h-19a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h19a.5.5 0 01.5.5v2a.5.5 0 01-.5.5zm-18.5-1h18v-1h-18v1zM15.516 7h-7a.5.5 0 010-1h7a.5.5 0 010 1zM14.516 10h-5a.5.5 0 010-1h5a.5.5 0 010 1z"
			  ></Path>
			</G>
			<Defs>
			  <ClipPath id="clip0">
				<Path fill="#fff" d="M0 0H24V24H0z"></Path>
			  </ClipPath>
			</Defs>
		</Svg>
	)
}

SvgTombstone.defaultProps = {
	style: {},
	width: 24,
	height: 24,
	fill: "none"
}

export default SvgTombstone
