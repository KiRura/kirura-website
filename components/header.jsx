import { Code, Home } from "@mui/icons-material";
import {
	AppBar,
	Box,
	Container,
	IconButton,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import NextLink from "next/link";

const right = [
	{
		id: 1,
		title: "Source",
		href: "https://github.com/KiRura/kirura-website",
		icon: <Code />,
	},
];

export default function Header() {
	return (
		<AppBar position="static" sx={{ mb: 4 }}>
			<Toolbar>
				<Container
					maxWidth="lg"
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Tooltip title="Home">
							<IconButton href="/" LinkComponent={NextLink}>
								<Home />
							</IconButton>
						</Tooltip>
						<Typography sx={{ ml: 1 }}>KiRura.vercel.app</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						{right.map((data, i) => {
							const HasPaddinginRightside = right.length !== i + 1;
							return (
								<Tooltip title={data.title} key={data.id}>
									<IconButton
										sx={{
											mr: HasPaddinginRightside ? 1 : 0,
										}}
										href={data.href}
										target="_blank"
									>
										{data.icon}
									</IconButton>
								</Tooltip>
							);
						})}
					</Box>
				</Container>
			</Toolbar>
		</AppBar>
	);
}
