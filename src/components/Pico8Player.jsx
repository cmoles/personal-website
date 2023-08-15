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

export const Pico8Player = ({src,placeholder,link}) => {

	if (isMobile) {
		return (
			<a href={link}>Visit Itch.io to play on mobile.</a>
		)
	}
	return (
		<Pico8 src={src}
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
			<Carts/>
			<Fullscreen/>
		</Pico8>
	)
}
