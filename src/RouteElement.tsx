import { useRoutes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import MainLayout from './Layout/MainLayout'
import Admin from './Pages/Admin'
import UploadFood from './Components/UploadFood'
import Dish from './Components/Dish/Dish'

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
      path: '/dish',
      element: (
        <MainLayout>
          <Dish />
        </MainLayout>
      )
    },
    {
      path: '/upload',
      element: <UploadFood />
    },
    {
      path: '/admin',
      element: <Admin />
    }
  ])
  return routeElement
}
