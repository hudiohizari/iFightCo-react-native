import React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

const SvgDatabase = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 48 16" fill={props.fill}>
			<Path d="M0 0h48v16H0V0z" fill="url(#prefix__pattern0)" />
			<Defs>
				<Pattern
				id="prefix__pattern0"
				patternContentUnits="objectBoundingBox"
				width={1}
				height={1}
				>
				<Use
					xlinkHref="#prefix__image0"
					transform="matrix(.00253 0 0 .00758 -.005 0)"
				/>
				</Pattern>
				<Image
				id="prefix__image0"
				width={400}
				height={132}
				xlinkHref="data:image/png;base64,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"
				/>
			</Defs>
		</Svg>
	)
}

SvgDatabase.defaultProps = {
	style: {},
	width: 48,
	height: 16,
	fill: "none"
}

export default SvgDatabase
