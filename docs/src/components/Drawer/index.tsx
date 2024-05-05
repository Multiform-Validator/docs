"use client";

import "./drawer.css";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "react-modern-drawer";

import SidebarWrapper from "@/components/SidebarWrapper";

export default function DrawerComponent() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState);
	};
	return (
		<>
			<Drawer
				open={isOpen}
				onClose={toggleDrawer}
				direction="left"
				className="my-drawer"
			>
				<section className="hide-scrollbar h-screen overflow-y-auto border-r-2 border-gray-700 bg-black">
					<SidebarWrapper />
				</section>
			</Drawer>
			<button onClick={toggleDrawer}>
				<AiOutlineMenu size={32} />
			</button>
		</>
	);
}
