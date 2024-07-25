import { Box, Divider, Typography } from "@mui/material";

/**
 * @param {import("@/data/ariaData").AriaData} props
 */
export default function Aria(props) {
	return (
		<Box
			sx={{
				flexDirection: "column",
				justifyContent: "start",
				alignItems: "start",
				mb: 4,
				display: "flex",
			}}
			minWidth="100%"
		>
			<Typography variant="h2" fontWeight="bold" sx={{ mr: 2, mb: 2 }}>
				{props.title}
			</Typography>
			<Divider
				flexItem
				sx={{
					mb: 2.5,
				}}
			/>
			{props.children}
		</Box>
	);
}
