"use client";

import { Link as NextLink } from "@chakra-ui/next-js";
import {
	Button,
	Card,
	CardBody,
	Flex,
	Icon,
	Link,
	Text,
	Tooltip,
} from "@chakra-ui/react";
import { useState } from "react";
import {
	FaBluesky,
	FaDiscord,
	FaGithub,
	FaGitlab,
	FaInstagram,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa6";
import {
	MdAir,
	MdAlarm,
	MdBolt,
	MdDelete,
	MdFireplace,
	MdGrass,
	MdSmartToy,
	MdTrain,
} from "react-icons/md";

/**
 * @type {import("@/types/accounts").Accounts[]}
 */
const accounts = [
	{
		accountId: "@7KiRura",
		name: "YouTube",
		description: "思い付いたものをポンポン上げる",
		href: "https://www.youtube.com/channel/UCmPBPQzdqk3LhvxpadSdzDA",
		icon: FaYoutube,
	},
	{
		accountId: "@7KiRura",
		name: "Twitter",
		description: "ただ思ったことを言い続ける",
		href: "https://twitter.com/7KiRura",
		icon: FaTwitter,
	},
	{
		accountId: "7KiRura",
		name: "GitLab",
		description: "GitHubから移転した",
		href: "https://gitlab.com/KiRura",
		icon: FaGitlab,
	},
	{
		accountId: "KiRura",
		name: "GitHub",
		description: "負債の塊",
		href: "https://github.com/KiRura",
		icon: FaGithub,
	},
	{
		accountId: "@7kirura.bsky.social",
		name: "Bluesky",
		description: "一応",
		href: "https://bsky.app/profile/7kirura.bsky.social",
		icon: FaBluesky,
	},
	{
		accountId: "@7kirura",
		name: "Instagram",
		description: "rom専 たまに飯テロ",
		href: "https://www.instagram.com/7kirura",
		icon: FaInstagram,
	},
	{
		accountId: "7kirura",
		name: "Discord",
		description: "いつもここにいる",
		href: "https://discord.com/users/606093171151208448",
		icon: FaDiscord,
	},
	{
		accountId: "bHYG5cF09HUKHN7C",
		name: "Refind Self",
		description: "全人類やれ",
		href: "https://store.steampowered.com/app/2514960/Refind_Self",
		icon: MdSmartToy,
	},
	{
		accountId: "俺のオーディン#KiR",
		name: "VALORANT",
		description: "基本マルチ",
		href: "https://playvalorant.com",
		icon: MdAir,
	},
	{
		accountId: "KiRura#1579",
		name: "Overwatch",
		description: "ゲンボを一番やってる",
		href: "https://overwatch.blizzard.com/",
		icon: MdAlarm,
	},
	{
		accountId: "1301188343",
		name: "ZZZ",
		description: "全人類やれ",
		href: "https://zenless.hoyoverse.com/",
		icon: MdBolt,
	},
	{
		accountId: "803854671",
		name: "原神",
		description: "フォンテーヌまでやれ",
		href: "https://genshin.hoyoverse.com/",
		icon: MdGrass,
	},
	{
		accountId: "802728892",
		name: "スタレ",
		description: "ピノコニーまでやれ",
		href: "https://hsr.hoyoverse.com/",
		icon: MdTrain,
	},
	{
		accountId: "21132502",
		name: "崩壊3rd",
		description: "Steam版とデータが上手く連携できてない",
		href: "https://www.houkai3rd.com/",
		icon: MdFireplace,
	},
	{
		accountId: "きるら",
		name: "apex legends",
		description: "カス",
		icon: MdDelete,
	},
];

export default function Accounts() {
	const [copied, setCopied] = useState(false);

	return accounts.map((data) => {
		return (
			<Card key={data.name}>
				<CardBody>
					<Flex mb={1} justify="space-between" w="100%">
						<Button
							mr={1}
							mb={1}
							leftIcon={<Icon as={data.icon} />}
							as={data.href ? NextLink : undefined}
							href={data.href}
							isDisabled={!data.href}
							h="fit-content"
							py={1.5}
							w="fit-content"
							whiteSpace="normal"
							overflowWrap="anywhere"
							isExternal
							colorScheme="gray"
						>
							{data.name}
						</Button>
						<Tooltip
							label={copied ? "コピーしました" : "コピー"}
							fontSize="sm"
							closeOnClick={false}
							hasArrow
						>
							<Link
								fontSize="sm"
								fontStyle="italic"
								color="gray"
								whiteSpace="normal"
								overflowWrap="anywhere"
								onClick={() => {
									try {
										navigator.clipboard.writeText(data.accountId);
										setCopied(true);
									} catch (_error) {}
								}}
								onMouseLeave={() => {
									setCopied(false);
								}}
							>
								{data.accountId}
							</Link>
						</Tooltip>
					</Flex>
					<Text>{data.description}</Text>
				</CardBody>
			</Card>
		);
	});
}
