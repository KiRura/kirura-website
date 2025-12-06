import { Link as NextLink } from "@chakra-ui/next-js";
import {
	Card,
	CardBody,
	Icon,
	Image,
	Link,
	SimpleGrid,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import { MdOpenInNew } from "react-icons/md";
import Aria from "@/components/aria";

const ymm4Images = [
	"/intros/concept_os_ymm4.png",
	"/intros/concept_os_ymm4_2.png",
];
const jcVideos = ["/intros/discord_jc.mp4", "/intros/discord_jc_2.mp4"];
const likes = [
	{
		name: "ドゥームフィスト",
		href: "https://overwatch.blizzard.com/heroes/doomfist",
	},
	{
		name: "ラマットラ",
		href: "https://overwatch.blizzard.com/heroes/ramattra",
	},
	{
		name: "バスティオン",
		href: "https://overwatch.blizzard.com/heroes/bastion",
	},
	{
		name: "miHoYoの大部分",
	},
	{
		name: "タルレミ・エラ",
		href: "https://lit.link/tallemiella",
	},
];
const disLikes = [
	{
		name: "今の高校",
	},
	{
		name: "Google",
	},
	{
		name: "Apple",
	},
	{
		name: "Microsoft",
	},
	{
		name: "Discord",
	},
	{
		name: "アビス",
	},
	{
		name: "ブリーズ",
	},
	{
		name: "miHoYoの一部",
	},
];

/**
 * @type {import("@/types/intros").intros[]}
 */
const intros = [
	{
		title: "YMM4",
		description: (
			<>
				<Text mb={2}>
					OSのコンセプト画像とか
					<Link
						as={NextLink}
						href="https://www.youtube.com/channel/UCmPBPQzdqk3LhvxpadSdzDA"
						isExternal
					>
						YouTube <Icon as={MdOpenInNew} boxSize={4} />
					</Link>
					とか
				</Text>
				<Tabs isFitted>
					<TabList>
						{ymm4Images.map((_, i) => {
							return <Tab key={_}>{i + 1}</Tab>;
						})}
					</TabList>
					<TabPanels>
						{ymm4Images.map((image) => {
							return (
								<TabPanel key={image} p={0} pt={2}>
									<Image src={image} borderRadius="md" w="100%" />
								</TabPanel>
							);
						})}
					</TabPanels>
				</Tabs>
			</>
		),
	},
	{
		title: "JavaScript",
		description: (
			<>
				<Text mb={2}>
					<Link
						as={NextLink}
						href="https://gitlab.com/KiRura#discord-bot"
						isExternal
					>
						Discord BOT <Icon as={MdOpenInNew} boxSize={4} />
					</Link>
					とかこのサイトとか
				</Text>
				<Image src="/intros/discord_bot.png" w="100%" borderRadius="md" />
			</>
		),
	},
	{
		title: "Jetpack Compose",
		description: (
			<>
				<Text mb={2}>Discordの模倣</Text>
				<SimpleGrid columns={2} spacing={2}>
					{jcVideos.map((jcVideo) => {
						return (
							// biome-ignore lint/a11y/useMediaCaption: <explanation>
							<video controls key={jcVideo} width="100%">
								<source src={jcVideo} type="video/mp4" />
							</video>
						);
					})}
				</SimpleGrid>
			</>
		),
	},
	{
		title: "年齢",
		description: <Text>16歳 / 高2</Text>,
	},
	{
		title: "好き",
		description: <Wrap>{LinksAndTexts(likes)}</Wrap>,
	},
	{
		title: "嫌い",
		description: <Wrap>{LinksAndTexts(disLikes)}</Wrap>,
	},
	{
		title: "16Personalities",
		description: (
			<Link
				as={NextLink}
				href="https://www.16personalities.com/intp-personality"
				isExternal
			>
				INTP-A <Icon as={MdOpenInNew} boxSize={4} />
			</Link>
		),
	},
];

function LinksAndTexts(array) {
	return array.map((data) => {
		if (data.href) {
			return (
				<WrapItem key={data.name}>
					<Link as={NextLink} href={data.href} isExternal fontSize="xl">
						{data.name} <Icon as={MdOpenInNew} boxSize={4} />
					</Link>
				</WrapItem>
			);
		}
		return (
			<WrapItem key={data.name}>
				<Text fontSize="xl">{data.name}</Text>
			</WrapItem>
		);
	});
}

export function Intro() {
	return (
		<SimpleGrid
			columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
			spacing={6}
			mt={6}
		>
			{intros.map((intro) => {
				return (
					<Card key={intro.title} borderRadius="3xl">
						<CardBody>
							<Aria title={intro.title} titleSize="md">
								{intro.description}
							</Aria>
						</CardBody>
					</Card>
				);
			})}
		</SimpleGrid>
	);
}
