import 'regenerator-runtime/runtime';
import Head from 'next/head'; // Import Head from next/head
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>React Table with Material UI</title>
        <meta name="description" content="For Assessment and Testing" />
        {/* Additional meta tags can be added here */}
      </Head>
      <body className={inter.className}>
        <nav className="navbar">
          <Link href="/">Home</Link>
          <Link href="/tableComponent">Table</Link>
        </nav>
        <main className="content">
          {children}
        </main>
      </body>
    </html>
  );
}
