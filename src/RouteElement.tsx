import { useRoutes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './Layout/MainLayout'
import Admin from './Pages/Admin'
import MenuItems from './Components/MenuItems'

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
          <MenuItems />
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
