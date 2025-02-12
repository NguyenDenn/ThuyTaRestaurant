import { useRoutes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './Layout/MainLayout'
import Menu from './Pages/Menu'
import Admin from './Pages/Admin'

export default function RoutesElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      )
    },
    {
      path: '/menu',
      element: (
        <MainLayout>
          <Menu />
        </MainLayout>
      )
    },
    {
      path: '/admin',
      element: <Admin />
    }
  ])
  return routeElement
}
