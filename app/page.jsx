"use client";

import { Box, Container, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Accounts from "@/components/accounts";
import Aria from "@/components/aria";

export default function Home() {
	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				// 横にボタンを置くつもりだった
				sx={{
					flexDirection: "column",
					mb: 3,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundImage: "url(/wallpaper.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "100%",
					pl: 2,
					pr: 2,
					backgroundPosition: "center bottom",
					backgroundColor: "#303346",
					borderRadius: 2,
				}}
				minWidth="100%"
				boxShadow="#000 0px 4px 32px"
			>
				<Typography
					width="100%"
					fontWeight="100"
					fontStyle="italic"
					sx={{
						textShadow: "#FFF 0px 0px 12px",
					}}
					fontSize={{ xs: "4.75em", sm: "5.5em", md: "5.5em" }}
				>
					Hello!
					<br />
					きるら,
					<br />
					{"(7)"}KiRura,
				</Typography>
			</Box>
			<Aria title="ゆた鯖">
				<Typography>
					→ ってなんだよ！: 人の集まり / Discordサーバーです
					<br />→ ってどんな場所: 身内ノリ多め
					<br />→ に入ったら良い事ある？: とても良い事も悪い事もあります
					<br />→ の招待寄越せ:{" "}
					{
						<Link
							href="https://discord.com/invite/WhBMHHzGE5"
							target="_blank"
							rel="noreferrer"
						>
							どうぞ
						</Link>
					}
				</Typography>
			</Aria>
			<Aria title="他リンク">
				<Grid
					container
					spacing={{ xs: 2, sm: 3, md: 3 }}
					columns={{ xs: 0, sm: 3, md: 4 }}
				>
					<Accounts />
				</Grid>
			</Aria>
			<Aria title="自己紹介">
				<Typography>
					YMM4・JavaScript(
					<Link href="https://github.com/KiRura#discord-bot" target="_blank">
						Discord BOT開発
					</Link>
					)・Kotlin(Androidアプリ開発)などをちょっとだけ齧ってる
					<br />
					高2 / 16歳
					<br />
					<br />
					好き: ドゥームフィスト・ラマットラ・バスティオン・miHoYoの大部分・
					<Link
						href="https://lit.link/tallemiella"
						target="_blank"
						rel="noreferrer"
					>
						タルレミ・エラ
					</Link>
					<br />
					嫌い:
					今の高校・Google・Apple・Microsoft・Discord・アビス・ブリーズ・miHoYoの一部
				</Typography>
			</Aria>
		</Container>
	);
}
