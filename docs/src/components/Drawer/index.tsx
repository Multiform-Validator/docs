"use client";

import "./drawer.css";

import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Drawer from "react-modern-drawer";

import SidebarWrapper from "@/components/SidebarWrapper/js";

export default function DrawerComponent({ locale }: { locale?: string }) {
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
				customIdSuffix="my-drawer"
			>
				<section className="hide-scrollbar h-screen overflow-y-auto border-r-2 border-gray-800 bg-drawer-bg-dark">
					<SidebarWrapper locale={locale} />
				</section>
			</Drawer>
			<button onClick={toggleDrawer}>
				<AiOutlineMenu size={32} />
			</button>
		</>
	);
}
