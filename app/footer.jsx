"use client";

import {
	Box,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Icon,
	IconButton,
	Stack,
	useColorMode,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdMenu } from "react-icons/md";
import { FDrawerPages, HFRightButtons } from "./HFcomponents";

export default function Footer() {
	const { colorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Drawer
				isOpen={isOpen}
				placement="bottom"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent
					borderRadius="md"
					bg={
						colorMode === "light"
							? "rgb(255, 255, 255, 0.75)"
							: "rgb(26, 32, 44, 0.75)"
					}
					backdropFilter="blur(12px)"
				>
					<DrawerCloseButton mt={2} mr={2} />
					<DrawerHeader>KiRura</DrawerHeader>
					<DrawerBody>
						<Stack spacing={2} mb={2}>
							<FDrawerPages onClose={onClose} />
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			<Box
				bg={
					colorMode === "light"
						? "rgb(255, 255, 255, 0.75)"
						: "rgb(26, 32, 44, 0.75)"
				}
				backdropFilter="blur(12px)"
				borderRadius="8px 8px 0px 0px"
				as="footer"
				pos="sticky"
				bottom={0}
				zIndex="docked"
				hideFrom="md"
			>
				<Container maxW="8xl">
					<Flex w="100%" justify="space-between" align="center" py={2}>
						<IconButton
							icon={<Icon as={MdMenu} />}
							ref={btnRef}
							onClick={onOpen}
							colorScheme="gray"
						/>
						<Stack direction="row" spacing={2}>
							<HFRightButtons />
						</Stack>
					</Flex>
				</Container>
			</Box>
		</>
	);
}
