"use client"
import React, { useState, useEffect } from 'react';
import { IoFilterOutline } from 'react-icons/io5';

const InsideNav = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const tasks = [
		{ name: 'RESOLVED', count: 25 },
		{ name: 'PENDING', count: 3 },
		{ name: 'IN_PROGRESS', count: 10 },
        { name: 'DISMISSED ', count: 10 },
	];
    
    
    
    
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsDropdownOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<nav className="flex justify-between items-center text-white w-full p-2 rounded-2xl">
			<div className="flex items-center relative">
				<button
					className="flex items-center px-2 py-1 text-white md:hidden"
					onClick={() => setIsDropdownOpen((prev) => !prev)}
				>
					Categories
					<span
						className={`ml-2 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
					>
						&#9660;
					</span>
				</button>

				{/* Dropdown Menu */}
				{isDropdownOpen && (
					<div className="absolute top-full left-0  shadow-lg rounded-md mt-1 w-[180px] z-10">
						{tasks.map((task) => (
							<div
								key={task.name}
								className="flex justify-between items-center p-2 hover:bg-gray-100  group"
							>
								<span className="font-medium text-white">
									{task.name}
								</span>
								<span className="ml-1  rounded-md px-2 text-xs">
									{task.count}
								</span>
								{/* Bottom border on hover */}
								<span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent group-hover:bg-purple-500 transition-all duration-300" />
							</div>
						))}
					</div>
				)}

				{/* Desktop Task Links */}
				<div className="hidden md:flex space-x-2 pl-2">
					{tasks.map((task) => (
						<div key={task.name} className="flex items-center relative group">
							<span className="font-medium text-white">
								{task.name}
							</span>
							<span className="ml-1 text-white  rounded-md px-2 text-xs">
								{task.count}
							</span>
							{/* Bottom border on hover */}
							<span className="absolute left-0 right-0 bottom-0 h-0.5 bg-transparent group-hover:bg-purple-500 transition-all  duration-300" />
						</div>
					))}
				</div>
			</div>
			<div className="flex space-x-2">
			</div>
		</nav>
	);
};

export default InsideNav;