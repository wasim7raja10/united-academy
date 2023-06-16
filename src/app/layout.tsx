import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "United Academy",
	description: "Best School in the world",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<nav>NAVBAR</nav>
				{children}
				<footer>
					<div className='relative h-60 w-full'>
						{/* background image */}
						<Image
							className='-z-20'
							fill
							src='/footer-img.png'
							alt='background image'
						/>
						<div className='absolute top-0 bottom-0 left-0 right-0 bg-primary bg-opacity-80 -z-10'></div>
						<div className='z-10 p-5'>
              <div>

              </div>
            </div>
					</div>
				</footer>
			</body>
		</html>
	);
}
