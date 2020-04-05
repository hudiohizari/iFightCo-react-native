import React from "react"
import Svg, { Path } from "react-native-svg"

const SvgStethoscope = props => {
	return (
		<Svg style={props.style} 
			width={props.size ? props.size : props.width} 
			height={props.size ? props.size : props.height} 
			viewBox="0 0 63.287 63.287" fill={props.fill}>
			<Path
				d="M60.993 20.124c0-4.404-3.583-7.987-7.987-7.987s-7.987 3.583-7.987 7.987c0 4.065 3.054 7.423 6.987 7.918v20.74c0 6.896-5.61 12.505-12.506 12.505h-8.43c-6.896 0-12.506-5.61-12.506-12.505V36.945h3.572c4.458 0 7.064-4.508 7.739-7.587.104-.625 2.575-15.366 2.941-20.494.139-1.929-.544-3.806-1.92-5.284a7.994 7.994 0 00-5.83-2.54h-1.422A1.118 1.118 0 0022.537 0H20.52c-.619 0-1.125.506-1.125 1.125v1.829c0 .619.506 1.125 1.125 1.125h2.016a1.12 1.12 0 001.108-1.04h1.422c1.648 0 3.24.694 4.366 1.903.994 1.067 1.487 2.409 1.39 3.778-.36 5.033-2.895 20.153-2.91 20.256-.507 2.307-2.522 5.967-5.776 5.967h-9.145c-3.254 0-5.27-3.66-5.767-5.918-.024-.151-2.558-15.27-2.919-20.304-.098-1.369.396-2.71 1.39-3.778a5.989 5.989 0 014.366-1.903h1.402a1.12 1.12 0 001.108 1.04h2.016c.619 0 1.125-.506 1.125-1.125v-1.83A1.126 1.126 0 0014.588 0h-2.016a1.12 1.12 0 00-1.108 1.04h-1.402a7.993 7.993 0 00-5.83 2.541c-1.376 1.478-2.058 3.354-1.92 5.283.366 5.127 2.837 19.869 2.951 20.542.665 3.03 3.271 7.539 7.729 7.539h3.572v11.836c0 7.999 6.507 14.505 14.506 14.505h8.43c7.999 0 14.506-6.507 14.506-14.505v-20.74c3.933-.494 6.987-3.852 6.987-7.917zm-7.987 5.987c-3.302 0-5.987-2.686-5.987-5.987s2.686-5.987 5.987-5.987 5.987 2.686 5.987 5.987-2.686 5.987-5.987 5.987zm0-9.379c-1.87 0-3.392 1.521-3.392 3.392s1.521 3.392 3.392 3.392 3.392-1.521 3.392-3.392-1.522-3.392-3.392-3.392zm0 4.783c-.768 0-1.392-.625-1.392-1.392s.624-1.392 1.392-1.392 1.392.625 1.392 1.392-.625 1.392-1.392 1.392z"
				fill="#5E17A9"
			/>
		</Svg>
	)
}

SvgStethoscope.defaultProps = {
	style: {},
	width: 24,
	height: 24,
	fill: "none"
}

export default SvgStethoscope
