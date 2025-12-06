"use client";

import { Flex, SimpleGrid, Switch, Text } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";

function Clock(milliMode) {
	const [mounted, setMounted] = useState(false);
	const [_is24Hour, _setIs24Hour] = useState(true);
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setMounted(true);

		const timer = setInterval(
			() => {
				setTime(new Date());
			},
			milliMode ? 1 : 100,
		);

		return () => clearInterval(timer);
	}, [milliMode]);

	const formattedTime = useMemo(() => {
		if (!mounted)
			return {
				formatted: {
					dates: {
						message: "読み込み中",
					},
				},
			};

		const d = time;
		const year = d.getFullYear();
		const month = d.getMonth();
		const date = d.getDate();
		const day = d.getDay();
		const dayArray = ["日", "月", "火", "水", "木", "金", "土"];
		const timestamp = d.getTime();

		return {
			formatted: {
				dates: {
					year: `${year}年`,
					month: `${month + 1}月`,
					date: `${date}日`,
					day: `(${dayArray[day]})`,
				},
				hours: {
					hour: `${d.getHours()}時`,
					minute: `${d.getMinutes()}分`,
					second: `${d.getSeconds()}秒`,
					milli: `${milliMode ? `000${d.getMilliseconds()}`.slice(-3) : ""}`,
				},
			},
			dayArray,
			timestamp,
			toString: () =>
				`${year}年${month + 1}月${date}日(${dayArray[day]}) ${d.getHours()}時${d.getMinutes()}分${d.getSeconds()}秒${milliMode ? `000${d.getMilliseconds()}`.slice(-3) : ""}`,
		};
	}, [time, milliMode, mounted]);

	return formattedTime;
}

export default function Page() {
	const [milliMode, setMilliMode] = useState(false);
	const { formatted } = Clock(milliMode);

	return (
		<Flex maxW="8xl" minH="100vh" direction="column" pt={{ base: 2, sm: 0 }}>
			<SimpleGrid w="100%" justifyContent="center">
				{Object.values(formatted).map((formatted) => {
					return (
						<Text key={formatted}>{Object.values(formatted).join("")}</Text>
					);
				})}
			</SimpleGrid>
			<Flex align="center">
				<Text>ミリ秒</Text>
				<Switch
					onChange={(event) => setMilliMode(event.target.checked)}
					isChecked={milliMode}
				/>
			</Flex>
		</Flex>
	);
}
