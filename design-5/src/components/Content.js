import React, { useState } from 'react';

import lightIcon from '../image/lightIcon.svg';
import soundIcon from '../image/soundIcon.svg';
import reloadIcon from '../image/reloadIcon.svg';
import leftBtn from '../image/leftBtn.svg';
import rightBtn from '../image/rightBtn.svg';
import boxIcon from '../image/boxIcon.svg';
import brandLogo2 from '../image/brandLogo2.svg';
import addIcon from '../image/addIcon.svg';

function Content() {
	const [menuSelected, setMenuSelected] = useState(0);
	const menuArray = ['Study', 'Quiz', 'Test', 'Game', 'Others'];
	return (
		<div className="">
			<div className="font-bold text-3xl text-gradient mb-5">Relations and Functions ( Mathematics )</div>

			<div className="xl:w-2/6 w-full md:w-1/2 flex mx-auto justify-between mb-5 ">
				{menuArray.map((item, index) => (
					<div
						className={`p-2 cursor-pointer ${
							index === menuSelected && 'font-bold border-b-4 border-indigo-500'
						}`}
						key={index}
						onClick={() => setMenuSelected(index)}
					>
						{item}
					</div>
				))}
			</div>

			<div className="bg-gradient-to-b from-blue-900 to-blue-400 xl:w-2/5 md:w-[600px] mx-auto rounded-3xl p-5">
				<div className="flex justify-between items-center px-5">
					<img src={lightIcon} alt="lightIcon" />
					<img src={soundIcon} alt="soundIcon" />
				</div>
				<div className="h-56 w-full flex justify-center items-center text-white md:text-4xl text-xl font-bold -mt-6">
					9 + 6 + 7x - 2x - 3
				</div>
			</div>

			<div className="flex justify-between my-5 xl:w-2/6 w-full md:w-1/2 mx-auto">
				<img src={reloadIcon} className="h-8" alt="reloadIcon" />
				<div className="flex items-center">
					<img src={leftBtn} className="h-8" alt="leftBtn" />
					<div className="font-bold text-2xl mx-5">01/10</div>
					<img src={rightBtn} className="h-8" alt="rightBtn" />
				</div>
				<img src={boxIcon} className="h-8" alt="boxIcon" />
			</div>

			<div className="flex justify-between">
				<img src={brandLogo2} className="md:h-36 h-20" alt="brandLogo" />
				<div className="flex items-center">
					<img src={addIcon} className="md:h-14 h-10" alt="addIcon" />

					<div className="text-gradient md:text-2xl text-l font-semibold">Create Flashcard</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
