import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperSlide } from 'swiper/react'
import '../../Components/MenuItems/MenuItems.css' // Import custom CSS
import { Link } from 'react-router-dom'

interface BannerProps {
  image: string
}

export default function Banner({ image }: BannerProps) {
  return (
    <SwiperSlide className='relative flex items-center justify-center'>
      <div className='absolute inset-0'>
        <img src={image} alt='Banner' className='w-full h-full object-cover' />
      </div>

      <img
        src='logo.png'
        alt='Logo'
        className='absolute top-[10%] left-1/2 transform -translate-x-1/2 w-[154px] h-[150px] z-30'
      />

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[100px] text-white text-center'>
        <div className='uppercase text-3xl'>Chào mừng đến với</div>
        <div className='uppercase text-5xl mt-4'>Nhà hàng Thủy Tạ Đầm Sen</div>
        <p className='text-xl mt-4 max-w-[800px]'>
          Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen, với 6 sảnh tiệc. Có thể đáp ứng nhu cầu
          lượng khách lớn từ 100 đến 700 khách/sảnh. Đặc biệt, nhà hàng Thủy Tạ còn có vị trí tổ chức tiệc ngoài trời...
        </p>
      </div>

      <Link
        to='/menu'
        className='absolute bottom-[10%] left-1/2 transform -translate-x-1/2 bg-white text-[#C75D15] font-medium text-xl py-4 px-8 rounded-lg hover:bg-[#C75D15] hover:text-white transition duration-300'
      >
        Tìm hiểu ngay
      </Link>
    </SwiperSlide>
  )
}
