import React, { useState, useEffect, useRef } from 'react';

const Countdown = ({ handleClickOpen }) => {
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');

	const clearTimer = (e) => {
		setTimer('00:10:00');

		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000);
		Ref.current = id;
	};

	useEffect(() => {
		clearTimer(getDeadTime());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);

		return {
			total,
			hours,
			minutes,
			seconds,
		};
	};

	const startTimer = (e) => {
		let { total, hours, minutes, seconds } = getTimeRemaining(e);
		if (total >= 0) {
			setTimer(
				(hours > 9 ? hours : '0' + hours) +
					':' +
					(minutes > 9 ? minutes : '0' + minutes) +
					':' +
					(seconds > 9 ? seconds : '0' + seconds)
			);
		}
	};

	const getDeadTime = () => {
		let deadline = new Date();

		deadline.setSeconds(deadline.getSeconds() + 600);
		return deadline;
	};

	return (
		<section className="Countdown" id="resigter">
			<div className="max-width">
				<div className="creativity_section_title">
					Time is running out. Grab your spot <span>fast!</span>
				</div>
				<div className="countdown_timer">{timer}</div>
				<div className="countdown_register_btn" onClick={handleClickOpen}>
					Register Now at ₹ 499 <span>1999</span>
				</div>
			</div>
		</section>
	);
};

export default Countdown;
