import Footer from '../../Components/Footer'

interface MainLayoutProps {
  children?: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}
