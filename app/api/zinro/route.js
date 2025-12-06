import { NextRequest, NextResponse } from "next/server";

/**
 * @param {NextRequest} request
 * @returns {Promise<NextResponse>}
 */
export async function GET(request) {
	const params = request.nextUrl.searchParams;
	const auth = params.get("auth");
	if (!auth || auth !== process.env.ZINRO_AUTH)
		return NextResponse.json(
			{
				message: "認証に失敗しました。authクエリが無いか間違っています。",
			},
			{
				status: 403,
			},
		);
	const res = await fetch(
		new URL(
			"https://discord.com/api/v10/channels/1267167883377774663/messages",
		),
		{
			headers: {
				Authorization: `${process.env.DISCORD_TOKEN}`,
				"Content-Type": "application/json",
			},
		},
	);

	return NextResponse.json(
		{ night: (await res.json())[0].content === "true" },
		{
			status: 200,
		},
	);
}

/**
 * @param {NextRequest} request
 * @returns {NextResponse}
 */
export async function POST(request) {
	const params = request.nextUrl.searchParams;
	const auth = params.get("auth");
	if (!auth || auth !== process.env.ZINRO_AUTH)
		return NextResponse.json(
			{
				message: "認証に失敗しました。authクエリが無いか間違っています。",
			},
			{
				status: 403,
			},
		);

	const body = await request.json();
	if (body.night === undefined)
		return NextResponse.json(
			{
				message: "bodyにnight: booleanが必要です。",
			},
			{
				status: 400,
			},
		);

	const res = await fetch(
		new URL(
			"https://discord.com/api/v10/channels/1267167883377774663/messages",
		),
		{
			headers: {
				Authorization: `${process.env.DISCORD_TOKEN}`,
				"Content-Type": "application/json",
			},
			body: Buffer.from(
				JSON.stringify({
					content: `${body.night}`,
				}),
			),
			method: "POST",
		},
	);

	return NextResponse.json(await res.json(), {
		status: 201,
	});
}
