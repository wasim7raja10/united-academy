"use client";

import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	function onMenuButtonClick() {
		setIsMenuOpen((prev) => !prev);
	}
	return (
		<nav className='px-5 py-4 sticky top-0'>
			<div className='flex justify-between items-center'>
				<div>LOGO</div>
				<button
					type='button'
					onClick={onMenuButtonClick}
					className='p-2 z-50 right-3 text-dark text-2xl'
				>
					{!isMenuOpen && <MdMenu />}
					{isMenuOpen && <MdClose />}
				</button>
			</div>
			{isMenuOpen && (
				<>
					<div
						onClick={onMenuButtonClick}
						className='fixed bg-dark bg-opacity-70 top-0 bottom-0 right-0 left-0 z-30'
					></div>
					<div className='fixed bg-light top-0 bottom-0 right-0 left-24 z-40'></div>
				</>
			)}
		</nav>
	);
}
