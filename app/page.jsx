"use client";

import { Link as NextLink } from "@chakra-ui/next-js";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Container,
	Flex,
	Heading,
	Highlight,
	Icon,
	Link,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import { MdOpenInNew, MdWeb } from "react-icons/md";
import Aria from "@/components/aria";
import Accounts from "./accounts";
import { Intro } from "./intro";

export default function Home() {
	return (
		<Container
			maxW="8xl"
			as="main"
			minH={{ base: "100vh", sm: "100vh", md: "fit-content" }}
		>
			<Flex
				my={32}
				// mt={{ base: 4, sm: 4, md: 0 }}
				align="center"
				// align="center"
				// bgImage="url(/wallpaper.jpg)"
				// bgRepeat="no-repeat"
				// bgSize={800}
				// bgPos="bottom right"
				// bgColor="#303346"
				// borderRadius="md"
				w="100%"
				direction="column"
			>
				<Heading as="h1" size="4xl" mb={8}>
					Hello!
					<br />
					<Highlight
						query={["きるら", "(7)KiRura"]}
						styles={{ color: "orange.500", _dark: { color: "orange.200" } }}
					>
						きるら, (7)KiRura,
					</Highlight>
				</Heading>
				<Link
					as={NextLink}
					href="https://kirura-website-chakra-v3.vercel.app"
					isExternal
					fontStyle="italic"
				>
					New Design Website <Icon as={MdOpenInNew} boxSize={4} />
				</Link>
			</Flex>

			<Container maxW="6xl">
				<Aria
					title="Discord鯖"
					mt={{ base: 4, sm: 4, md: 0 }}
					titleAlign="center"
					titleMb={4}
					mb={8}
				>
					<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={6}>
						<Card borderRadius="3xl">
							<CardBody>
								<Aria
									title="きるらの色々"
									titleSize="lg"
									iconImage="/kirura.png"
								>
									<Text>
										俺がいるただのDiscord鯖
										<br />
										GitLabの通知とか変なのを観測できる
									</Text>
								</Aria>
							</CardBody>
							<CardFooter justify="end">
								<Button
									leftIcon={<Icon as={MdOpenInNew} />}
									as={NextLink}
									href="https://discord.gg/JUyg7nu6pr"
									isExternal
									colorScheme="orange"
								>
									招待リンク
								</Button>
							</CardFooter>
						</Card>
						<Card borderRadius="3xl">
							<CardBody>
								<Aria title="ゆた鯖" titleSize="lg">
									<Text>
										→ ってなんだよ！: 人の集まり / Discord鯖
										<br />→ ってどんな場所: 身内ノリ多め
										<br />→ に入ったら良い事ある？: とても良い事も悪い事もある
									</Text>
								</Aria>
							</CardBody>
							<CardFooter justify="end">
								<Stack direction="row" spacing={2}>
									<Button
										as={NextLink}
										href="https://discord.gg/WhBMHHzGE5"
										leftIcon={<Icon as={MdOpenInNew} />}
										isExternal
										whiteSpace="normal"
										overflowWrap="anywhere"
									>
										招待リンク
									</Button>
									<Button
										as={NextLink}
										href="https://yutasaba-283153b1-632d-4bf9-a6f6-8a9dac76272d.vercel.app/"
										leftIcon={<Icon as={MdWeb} />}
										isExternal
										variant="outline"
										whiteSpace="normal"
										overflowWrap="anywhere"
									>
										Webサイト
									</Button>
								</Stack>
							</CardFooter>
						</Card>
					</SimpleGrid>
				</Aria>
			</Container>
			<Aria title="他リンク" titleAlign="center" titleMb={4} mb={8}>
				<SimpleGrid
					spacing={2}
					columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
					mt={6}
				>
					<Accounts />
				</SimpleGrid>
			</Aria>
			<Aria title="自己紹介" mb={6} titleAlign="center" titleMb={4}>
				<Intro />
			</Aria>
		</Container>
	);
}
