export const metadata = {
	title: 'IMDB Clone AP7',
	description: 'Next JS IMDB Application',
};

export default function RootLayout({ children }) {
	return (
		<>
			<html lang='en'>
				<body>{children}</body>
			</html>
		</>
	);
}
