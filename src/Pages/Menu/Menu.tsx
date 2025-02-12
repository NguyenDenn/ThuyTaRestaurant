import MenuItems from '~/Components/MenuItems'
import Navbar from '~/Components/Navigate/Navbar'

export default function Menu() {
  return (
    <div className='bg-gray-100'>
      <div className='relative h-screen bg-gray-100 overflow-hidden flex items-center justify-center'>
        {/* 1/4 hình tròn cam với hiệu ứng mất màu */}{' '}
        <div
          className='absolute w-[1275px] h-[1275px] rounded-full top-[-637.5px] left-[-637.5px]'
          style={{
            background: `radial-gradient(circle, transparent 60%, rgba(251, 146, 60, 0.5) 60%, rgba(251, 146, 60, 0.5) 70%, transparent 70%)`
          }}
        ></div>
        <Navbar />
        <MenuItems />
      </div>
    </div>
  )
}
