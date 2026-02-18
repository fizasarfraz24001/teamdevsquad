import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'DevSquad - Digital Product Studio',
    description: 'A Digital Product Studio that will Work',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ur">
            <body>{children}</body>
        </html>
    )
}

