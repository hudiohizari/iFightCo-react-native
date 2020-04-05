import React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgPhone = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 24 24" fill={props.fill}>
			<G clipPath="url(#prefix__clip0)">
				<Path
					d="M14.866 4.587a5.749 5.749 0 012.962 1.573 5.73 5.73 0 011.576 2.957l-4.538-4.53zm0-4.587c2.331.259 4.505 1.3 6.165 2.955A10.313 10.313 0 0124 9.105L14.866 0zm7.985 18.257v3.44a2.29 2.29 0 01-1.562 2.182c-.303.102-.624.14-.943.112a22.766 22.766 0 01-9.915-3.52 22.384 22.384 0 01-6.894-6.882A22.667 22.667 0 01.009 3.647a2.29 2.29 0 011.36-2.305c.292-.128.608-.195.927-.195h3.447A2.3 2.3 0 018.04 3.119c.145 1.101.415 2.182.804 3.223a2.29 2.29 0 01-.517 2.42l-1.46 1.456a18.366 18.366 0 006.895 6.88l1.459-1.456a2.3 2.3 0 012.424-.516 14.78 14.78 0 003.229.803 2.3 2.3 0 011.976 2.328z"
					stroke="#5E17A9"
					strokeLinecap="round"
					strokeLinejoin="round"
					/>
			</G>
			<Defs>
				<ClipPath id="prefix__clip0">
					<Path fill="#fff" d="M0 0h24v24H0z" />
				</ClipPath>
			</Defs>
		</Svg>
	)
}

SvgPhone.defaultProps = {
	style: {},
	width: 24,
	height: 24,
	fill: "none"
}

export default SvgPhone
