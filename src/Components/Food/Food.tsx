import { Carousel } from 'antd'

const images = [
  { src: 'beef.png', name: ['Bò Argentina', 'Sốt tiêu đen'] },
  { src: 'beefsteak.png', name: ['Bò Beefsteak'] },
  { src: 'boluclac.png', name: ['Bò Lúc Lắc'] },
  { src: 'boxaocairo.png', name: ['Bò Xào Cairo'] },
  { src: 'beef.png', name: ['Bò Argentina', 'Sốt tiêu đen'] }
]
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Hiển thị 4 ảnh mỗi lần
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true
}

interface FoodProps {
  food: string // đồ ăn
  included: string // đi kèm
  detail: string // chi tiết
  ingredient1: string // nguyên liệu 1
  ingredient2: string // nguyên liệu 2
  price_from: string // giá từ
  price_to: string // giá đến
}

export default function Food({ food, detail, included, ingredient1, ingredient2, price_from, price_to }: FoodProps) {
  return (
    <div className='col-span-6'>
      <div className='flex items-center '>
        <img src='beef.png' alt='' className='w-[465px] h-[465px] z-10' />
        <div className='text-3xl flex flex-col gap-4'>
          <div
            className='font-bold text-black'
            style={{
              fontFamily: 'Manrope'
            }}
          >
            {food}
          </div>
          <p
            className='uppercase text-[#ED7D31] font-semibold text-5xl'
            style={{
              fontFamily: 'MTD Valky Bold'
            }}
          >
            {included}
          </p>
          <div className='border border-x-transparent border-t-transparent border-b-[#ED7D31]' />
          <p
            className='text-2xl'
            style={{
              fontFamily: 'Manrope'
            }}
          >
            {detail}
          </p>
          <div className='flex items-center gap-3'>
            <div className='w-[120px] h-[35px] bg-[#FCBB62] text-white text-sm flex items-center justify-center rounded-md'>
              {ingredient1}
            </div>
            <div className='w-[120px] h-[35px] bg-[#FCBB62] text-white text-sm flex items-center justify-center rounded-md'>
              {ingredient2}
            </div>
          </div>
          <div
            className=''
            style={{
              fontFamily: 'Manrope',
              color: '#ED7D31',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal'
            }}
          >
            {/* 150.000 - 300.000 VNĐ */}
            {price_from} - {price_to} VNĐ
          </div>
        </div>
      </div>
      <div className='pb-48 container'>
        <Carousel {...settings} className='custom-carousel'>
          {images.map((item, index) => (
            <div key={index} className='flex flex-col items-center'>
              <img src={item.src} alt={item.name[0]} className='w-[120px] h-[120px] object-cover rounded-lg' />
              <p className='mt-2 text-lg font-semibold text-start ml-4'>
                {item.name.map((line, i) => (
                  <span key={i} className='block'>
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
