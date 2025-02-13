import { EnvironmentFilled } from '@ant-design/icons'

export default function Footer() {
  return (
    <div className='bg-cover bg-center ' style={{ backgroundImage: "url('/footer.png')" }}>
      <div className='container'>
        <div className='flex items-center text-white py-20'>
          {/* left */}
          <div className='flex gap-x-24'>
            <img src='logo.png' alt='' className='w-[154px] h-[150px] object-cover' />
            <div className='flex flex-col gap-3'>
              <h2 className='text-3xl'>Liên hệ</h2>
              <div className='flex items-start gap-2'>
                <EnvironmentFilled className='mt-1' />
                <p>
                  03 Hòa Bình, Phường 3, Quận 11, TP.Hồ Chí Minh <br /> (Cổng số 2 Công viên Văn hóa Đầm Sen)
                </p>
              </div>
              <div className='flex items-start gap-2'>
                <svg
                  className=' ml-[-5px]'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  width={24}
                  height={24}
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z' />
                </svg>
                <p>028 3961 2082 - 028 3858 6763</p>
              </div>
            </div>
            {/** right */}
            <div className='grid grid-cols-1 gap-2'>
              <h1 className='text-3xl'>
                Các đơn vị cùng hệ thống <br /> Phuthotourist
              </h1>
              <div className=' flex items-center gap-2'>
                <p className='h-2 w-2 rounded-full bg-white'></p>
                <p>Công ty CP DVDL Phú Thọ</p>
              </div>
              <div className=' flex items-center gap-2'>
                <p className='h-2 w-2 rounded-full bg-white'></p>
                <p>Khu du lịch sinh thái Vàm Sát</p>
              </div>
              <div className=' flex items-center gap-2'>
                <p className='h-2 w-2 rounded-full bg-white'></p>
                <p>Khách sạn Ngọc Lan</p>
              </div>
              <div className=' flex items-center gap-2'>
                <p className='h-2 w-2 rounded-full bg-white'></p>
                <p>Khách sạn Phú Thọ</p>
              </div>
              <div className=' flex items-center gap-2'>
                <p className='h-2 w-2 rounded-full bg-white'></p>
                <p>Trung tâm Du lịch Đầm Sen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
