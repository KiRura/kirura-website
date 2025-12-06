import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function MdLink(props) {
	const { href, children } = props;

	return (
		<Link as={NextLink} href={href} target="_blank">
			{children}
		</Link>
	);
}
