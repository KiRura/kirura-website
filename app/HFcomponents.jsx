"use client";

import { Link as NextLink } from "@chakra-ui/next-js";
import {
	Button,
	Icon,
	IconButton,
	Tooltip,
	useColorMode,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import {
	MdArchitecture,
	MdCode,
	MdDarkMode,
	MdHome,
	MdLightMode,
} from "react-icons/md";

/**
 * @type {import("@/types/pages").pages[]}
 */
const pages = [
	{
		name: "KiRura",
		href: "/",
		icon: MdHome,
	},
	{
		name: "Tools",
		href: "/tools",
		icon: MdArchitecture,
	},
];

export function HLeftButtons() {
	const path = usePathname();
	return (
		<>
			{pages.map((page) => {
				let isActive = false;
				if (page.href === path) isActive = true;
				if (page.href !== "/" && path.match(page.href)) isActive = true;
				return (
					<Button
						key={page.name}
						leftIcon={page.icon ? <Icon as={page.icon} /> : undefined}
						as={NextLink}
						href={page.href}
						variant={isActive ? "solid" : "ghost"}
						colorScheme="gray"
					>
						{page.name}
					</Button>
				);
			})}
		</>
	);
}

export function HFRightButtons() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<>
			<Tooltip label="Source">
				<IconButton
					icon={<Icon as={MdCode} />}
					as={NextLink}
					href="https://gitlab.com/KiRura/kirura-website"
					colorScheme="gray"
					isExternal
				/>
			</Tooltip>
			<Tooltip
				label={colorMode === "light" ? "Light" : "Dark"}
				closeOnClick={false}
			>
				<IconButton
					icon={
						colorMode === "light" ? (
							<Icon as={MdLightMode} />
						) : (
							<Icon as={MdDarkMode} />
						)
					}
					onClick={toggleColorMode}
					colorScheme="gray"
				/>
			</Tooltip>
		</>
	);
}

export function FDrawerPages({ onClose }) {
	const path = usePathname();
	return (
		<>
			{pages.map((page) => {
				let isActive = false;
				if (page.href === path) isActive = true;
				if (page.href !== "/" && path.match(page.href)) isActive = true;
				return (
					<Button
						key={page.name}
						leftIcon={page.icon ? <Icon as={page.icon} /> : undefined}
						as={NextLink}
						href={page.href}
						variant={isActive ? "solid" : "ghost"}
						onClick={onClose}
						w="100%"
						justifyContent="start"
						whiteSpace="normal"
						h="fit-content"
						overflowWrap="anywhere"
						py={2.5}
						colorScheme="gray"
					>
						{page.name}
					</Button>
				);
			})}
		</>
	);
}
