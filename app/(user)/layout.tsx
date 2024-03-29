import '../../styles/globals.css'
import Header from '../components/Header'
import Banner from '../components/Banner'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='max-w-7xl mx-auto bg-[#4e4e7e] text-white'>
      <Header />
      <Banner />

      {children}
        </body>
    </html>
  )
}
