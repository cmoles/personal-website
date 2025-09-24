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

export const MobileLink = ({cart}) => {
	const [mQuery, setMQuery] = React.useState({
		matches: window.matchMedia("(max-width: 600px)").matches,
	});

	React.useEffect(() => {
		let mediaQuery = window.matchMedia("(max-width: 600px)");
		mediaQuery.addListener(setMQuery);

		return () => mediaQuery.removeListener(setMQuery);
	}, []);

	if (mQuery && mQuery.matches) {
		return (
			<p>
				<a href={cart+".html"}>Click here to play on mobile.</a>
			</p>
		);
	}
	return (<></>);
}

export const Pico8Player = ({cart, placeholder}) => {
	// Load gamepad support script
	React.useEffect(() => {
		const script = document.createElement('script');
		script.src = '/pico8gamepad.js';
		script.async = true;
		document.head.appendChild(script);

		return () => {
			// Cleanup script when component unmounts
			if (document.head.contains(script)) {
				document.head.removeChild(script);
			}
		};
	}, []);

	if (isMobile) {
		return (
			<a href={cart+".html"}>Click here to play on mobile.</a>
		)
	}
	return (
		<>
		<MobileLink cart={cart} />
		<div className="pico8-player-container">
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
		</div>
		</>
	)
}
