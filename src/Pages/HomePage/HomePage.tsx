import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './HomePage.css' // Import the custom CSS file
import { Link } from 'react-router-dom'
import Banner from '~/Components/Banner'

const HomePage: React.FC = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation
      modules={[Pagination, Navigation]}
      className='w-full h-screen flex items-center justify-center relative custom-swiper'
    >
      <SwiperSlide className='flex items-center justify-center'>
        <div className='relative'>
          <img src='Home.png' alt='Slide 1' className='object-cover w-full h-full' />
          <img
            src='logo.png'
            alt=''
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[450px] z-30 w-[154px] h-[150px]'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[200px] text-white text-2xl z-10'>
            <div className='uppercase text-3xl text-center'>chào mừng đến với</div>
            <div className='uppercase text-5xl mt-4 text-center'>nhà hàng thủy tạ đầm sen</div>
            <div className='text-xl mt-4 text-center'>
              Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen, với 6 sảnh tiệc. Có thể đáp ứng nhu
              cầu lượng khách lớn từ 100 đến 700 khách/sảnh. Đặc biệt, nhà hàng Thủy Tạ còn có vị trí tổ chức tiệc ngoài
              trời tại Quảng trường La Mã (CVVH Đầm Sen), đáp ứng lượng khách lên đến 2000. Đây là vị trí lý tưởng để
              các quý công ty tổ chức đại tiệc cuối năm, hoặc sự kiện, tiệc cưới, sinh nhật...
            </div>
          </div>

          <Link
            to='/menu'
            className='absolute top-1/2  flex justify-center items-center left-1/2 transform -translate-x-1/2 translate-y-[200px] z-50 w-[391px] h-[72px] bg-white rounded-lg text-[#C75D15] font-medium text-xl hover:bg-[#c75d15] hover-[border-1px] cursor-pointer hover:text-white transition duration-300'
          >
            Tìm hiểu ngay
          </Link>
        </div>
        s
      </SwiperSlide>

      <SwiperSlide className='flex items-center justify-center'>
        <div className='relative'>
          <img src='Home1.png' alt='Slide 1' className='object-cover w-full h-full' />
          <img
            src='logo.png'
            alt=''
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[450px] z-30 w-[154px] h-[150px]'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[200px] text-white text-2xl z-10'>
            <div className='uppercase text-3xl text-center'>chào mừng đến với</div>
            <div className='uppercase text-5xl mt-4 text-center'>nhà hàng thủy tạ đầm sen</div>
            <div className='text-xl mt-4 text-center'>
              Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen, với 6 sảnh tiệc. Có thể đáp ứng nhu
              cầu lượng khách lớn từ 100 đến 700 khách/sảnh. Đặc biệt, nhà hàng Thủy Tạ còn có vị trí tổ chức tiệc ngoài
              trời tại Quảng trường La Mã (CVVH Đầm Sen), đáp ứng lượng khách lên đến 2000. Đây là vị trí lý tưởng để
              các quý công ty tổ chức đại tiệc cuối năm, hoặc sự kiện, tiệc cưới, sinh nhật...
            </div>
          </div>

          <Link
            to='/menu'
            className='absolute top-1/2  flex justify-center items-center left-1/2 transform -translate-x-1/2 translate-y-[200px] z-50 w-[391px] h-[72px] bg-white rounded-lg text-[#C75D15] font-medium text-xl hover:bg-[#c75d15] hover-[border-1px] cursor-pointer hover:text-white transition duration-300'
          >
            Tìm hiểu ngay
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className='flex items-center justify-center'>
        <div className='relative'>
          <img src='Home2.png' alt='Slide 1' className='object-cover w-full h-full' />
          <img
            src='logo.png'
            alt=''
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[450px] z-30 w-[154px] h-[150px]'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[200px] text-white text-2xl z-10'>
            <div className='uppercase text-3xl text-center'>chào mừng đến với</div>
            <div className='uppercase text-5xl mt-4 text-center'>nhà hàng thủy tạ đầm sen</div>
            <div className='text-xl mt-4 text-center'>
              Nhà hàng Thủy Tạ Đầm Sen nằm trên hồ của công viên văn hóa Đầm Sen, với 6 sảnh tiệc. Có thể đáp ứng nhu
              cầu lượng khách lớn từ 100 đến 700 khách/sảnh. Đặc biệt, nhà hàng Thủy Tạ còn có vị trí tổ chức tiệc ngoài
              trời tại Quảng trường La Mã (CVVH Đầm Sen), đáp ứng lượng khách lên đến 2000. Đây là vị trí lý tưởng để
              các quý công ty tổ chức đại tiệc cuối năm, hoặc sự kiện, tiệc cưới, sinh nhật...
            </div>
          </div>

          <Link
            to='/menu'
            className='absolute top-1/2  flex justify-center items-center left-1/2 transform -translate-x-1/2 translate-y-[200px] z-50 w-[391px] h-[72px] bg-white rounded-lg text-[#C75D15] font-medium text-xl hover:bg-[#c75d15] hover-[border-1px] cursor-pointer hover:text-white transition duration-300'
          >
            Tìm hiểu ngay
          </Link>
        </div>
      </SwiperSlide>

      {/* Navigation arrows */}
      <div className='swiper-button-next'></div>
      <div className='swiper-button-prev'></div>
    </Swiper>
  )
}

export default HomePage
