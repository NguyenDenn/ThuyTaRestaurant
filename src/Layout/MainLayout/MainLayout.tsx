import Footer from '~/Components/Footer'
interface MainLayoutProps {
  children?: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='flex flex-col'>
      <div className='flex-1 flex flex-col'>{children}</div>
      <Footer />
    </div>
  )
}
