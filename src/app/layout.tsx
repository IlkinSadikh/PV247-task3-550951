import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import React from "react";

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
	title: 'Task 03'
};

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html lang="en">
		<body className={poppins.className}>{children}</body>
	</html>
);

export default RootLayout;
