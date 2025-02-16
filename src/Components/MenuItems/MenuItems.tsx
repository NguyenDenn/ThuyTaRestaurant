import Navbar from '../Navbar/Navbar'
import './MenuItems.css'
import OrangeCircle from '../OrangeCircle'
import Food from '../Food'
import Menu from '../Menu/Menu'

export default function MenuItems() {
  return (
    <div className='relative bg-gray-200 h-screen'>
      <Navbar />
      <OrangeCircle />
      <img src='object.png' alt='' className='absolute bottom-0 right-0 z-0 w-[600px] h-[300px]' />
      {/* Detail Food */}
      <div className='grid grid-cols-12 z-10 gap-40'>
        <Food
          detail='Dipped Argentina beef with black pepper sauce'
          food='Bò Argentina'
          included='Sốt tiêu đen'
          ingredient1='Thịt bò'
          ingredient2='Tiêu đen'
          price_from='150.000'
          price_to='300.000'
        />
        {/* MENU */}
        <Menu />
      </div>
    </div>
  )
}
