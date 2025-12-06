// thanks for https://naoto-kagaya.com/articles/2023-01-24-react-markdown

export default function MdImage(props) {
	const { src, alt, title } = { ...props };

	return <img src={src} alt={alt} title={title} width="60%" />;
}
