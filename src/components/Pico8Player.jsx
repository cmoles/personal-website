import React from 'react'
import Pico8 from 'react-pico-8'
import { Controls,
	Reset,
	Pause,
	Sound,
	Carts,
	Fullscreen } from 'react-pico-8/buttons'
import 'react-pico-8/styles.css'
import {isMobile} from 'react-device-detect';

export const Pico8Player = ({cart,placeholder}) => {

	if (isMobile) {
		return (
			<a href={cart+".html"}>Click here to play on mobile.</a>
		)
	}
	return (
		<Pico8 src={cart+".js"}
				autoPlay={true}
				legacyButtons={false}
				hideCursor={false}
				center={true}
				blockKeys={false}
				usePointer={true}
				unpauseOnReset={true}
				placeholder={placeholder}
		>
			<Controls/>
			<Reset/>
			<Pause/>
			<Sound/>
			<Fullscreen/>
		</Pico8>
	)
}
