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

// Custom FocusToggle button component
const FocusToggle = () => {
	const [requireFocus, setRequireFocus] = React.useState(() => {
		if (typeof window !== 'undefined' && typeof window.getRequireWindowFocus === 'function') {
			return window.getRequireWindowFocus();
		}
		return false;
	});
	const [isHovered, setIsHovered] = React.useState(false);

	const handleToggle = () => {
		if (typeof window !== 'undefined' && typeof window.toggleRequireWindowFocus === 'function') {
			const newValue = window.toggleRequireWindowFocus();
			setRequireFocus(newValue);
		}
	};

	// Locked icon (when requireFocus is true)
	const lockedIcon = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z\'/%3E%3C/svg%3E")';

	// Unlocked icon (when requireFocus is false)
	const unlockedIcon = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z\'/%3E%3C/svg%3E")';

	return (
		<div
			className="p8_menu_button menu left"
			style={{
				marginLeft: '6px',
				padding: '4px',
				cursor: 'pointer'
			}}
			onClick={handleToggle}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			title={requireFocus ? "Controller locked to window focus" : "Controller unlocked (works when unfocused)"}
		>
			<button
				className="mask"
				style={{
					background: isHovered ? '#fff' : '#64605d',
					border: 0,
					display: 'inline-block',
					height: '24px',
					width: '24px',
					pointerEvents: 'none',
					WebkitMaskImage: requireFocus ? lockedIcon : unlockedIcon,
					maskImage: requireFocus ? lockedIcon : unlockedIcon
				}}
			/>
		</div>
	);
};

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
				<FocusToggle/>
			</Pico8>
		</div>
		</>
	)
}
