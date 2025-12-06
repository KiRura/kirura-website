"use client";

import {
	Air,
	Bolt,
	Delete,
	Fireplace,
	GitHub,
	Grass,
	Instagram,
	SmartToy,
	SportsEsports,
	Timer,
	Train,
	Twitter,
	YouTube,
} from "@mui/icons-material";
import { Box, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

/**
 * @type {import("@/data/accounts").Accounts[]}
 */
const accounts = [
	{
		id: 1,
		accountId: "@7KiRura",
		name: "YouTube",
		description: "思い付いたものをポンポン上げる",
		href: "https://www.youtube.com/channel/UCmPBPQzdqk3LhvxpadSdzDA",
		icon: <YouTube />,
	},
	{
		id: 2,
		accountId: "@7KiRura",
		name: "Twitter",
		description: "ただ思ったことを言い続ける",
		href: "https://twitter.com/7KiRura",
		icon: <Twitter />,
	},
	{
		id: 3,
		accountId: "KiRura",
		name: "GitHub",
		description: "負債の塊",
		href: "https://github.com/KiRura",
		icon: <GitHub />,
	},
	{
		id: 4,
		accountId: "@7kirura",
		name: "Instagram",
		description: "rom専 たまに飯テロ",
		href: "https://www.instagram.com/7kirura",
		icon: <Instagram />,
	},
	{
		id: 5,
		accountId: "7kirura (きるら)",
		name: "Discord",
		description: "いつもここにいる",
		href: "https://discord.com/users/606093171151208448",
		icon: <SportsEsports />,
	},
	{
		id: 6,
		accountId: "bHYG5cF09HUKHN7C",
		name: "Refind Self",
		description: "全人類やれ",
		href: "https://store.steampowered.com/app/2514960/Refind_Self",
		icon: <SmartToy />,
	},
	{
		id: 7,
		accountId: "俺のオーディン#KiR",
		name: "VALORANT",
		description: "基本マルチ",
		href: "https://playvalorant.com",
		icon: <Air />,
	},
	{
		id: 8,
		accountId: "KiRura#1579",
		name: "Overwatch",
		description: "ゲンボを一番やってる",
		href: "https://overwatch.blizzard.com/",
		icon: <Timer />,
	},
	{
		id: 9,
		accountId: "1301188343 (きるら)",
		name: "ZZZ",
		description: "全人類やれ",
		href: "https://zenless.hoyoverse.com/",
		icon: <Bolt />,
	},
	{
		id: 10,
		accountId: "803854671 (きるら)",
		name: "原神",
		description: "フォンテーヌまでやれ",
		href: "https://genshin.hoyoverse.com/",
		icon: <Grass />,
	},
	{
		id: 11,
		accountId: "802728892 (きるら)",
		name: "スタレ",
		description: "ピノコニーまでやれ",
		href: "https://hsr.hoyoverse.com/",
		icon: <Train />,
	},
	{
		id: 12,
		accountId: "21132502(?)",
		name: "崩壊3rd",
		description: "Steam版とデータが上手く連携できてない",
		href: "https://www.houkai3rd.com/",
		icon: <Fireplace />,
	},
	{
		id: 13,
		accountId: "きるら",
		name: "apex legends",
		description: "カス",
		icon: <Delete />,
	},
];

export default function Accounts() {
	return accounts.map((data, _i) => {
		return (
			<Grid
				key={data.id}
				display="flex"
				flexDirection="column"
				xs={1.25}
				sm={1.25}
				md={1.25}
			>
				<Box
					display="flex"
					flexDirection="row"
					alignItems="center"
					sx={{ mb: 0.5 }}
				>
					<Chip
						sx={{ display: "flex", mr: 1 }}
						icon={data.icon}
						label={data.name}
						clickable={data.href}
						href={data.href}
						target="_blank"
						component="a"
					/>
					<Typography variant="body2" fontStyle="italic" color="GrayText">
						{data.accountId}
					</Typography>
				</Box>
				<Box>
					<Typography>{data.description}</Typography>
				</Box>
			</Grid>
		);
	});
}
