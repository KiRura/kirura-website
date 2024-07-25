"use client";

import { createTheme } from "@mui/material";
import { M_PLUS_Rounded_1c } from "next/font/google";

const mplus = M_PLUS_Rounded_1c({
	weight: ["100", "300", "400", "500", "700", "800", "900"],
	subsets: ["latin"],
});

export default createTheme({
	palette: { mode: "dark" },
	typography: { fontFamily: mplus.style.fontFamily },
});
