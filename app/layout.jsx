import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata = {
  title: 'ComponentHub',
  description:
    "ComponentHub is your go-to resource for high-quality, reusable components built with React and Tailwind CSS. Our library offers a curated collection of UI elements that are fully customizable and easy to integrate into your projects. Whether you’re a seasoned developer or just starting out, you'll find everything from buttons and cards to complex layouts and modals. Each component comes with comprehensive documentation and live examples, empowering you to accelerate your development process and create stunning, responsive interfaces effortlessly. Join the community, share your creations, and elevate your web development experience with ComponentHub!"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
