import { Carousel } from 'antd'
import { FoodType } from '~/types/Food'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  arrows: true
}
type FoodProps = {
  selectedFood: FoodType | null
  foods: FoodType[]
  setSelectedFood: (food: FoodType) => void
}

export default function Food({ selectedFood, foods, setSelectedFood }: FoodProps) {
  if (!selectedFood) return <p>Đang tải...</p>
  return (
    <div className='col-span-6'>
      <div className='flex items-center '>
        <img src={selectedFood.image} alt={selectedFood.ten} className='w-[465px] h-[465px] z-10' />
        <div className='text-3xl flex flex-col gap-4'>
          <div className='font-bold text-black' style={{ fontFamily: 'Manrope' }}>
            {selectedFood.ten}
          </div>
          <p className='uppercase text-[#ED7D31] font-semibold text-5xl' style={{ fontFamily: 'MTD Valky Bold' }}>
            {selectedFood.dikem}
          </p>
          <div className='border border-x-transparent border-t-transparent border-b-[#ED7D31]' />
          <p className='text-2xl' style={{ fontFamily: 'Manrope' }}>
            {selectedFood.mieuta}
          </p>
          <div className='flex items-center gap-3'>
            <div className='w-[120px] h-[35px] bg-[#FCBB62] text-white text-sm flex items-center justify-center rounded-md'>
              {selectedFood.nguyenlieu1}
            </div>
            <div className='w-[120px] h-[35px] bg-[#FCBB62] text-white text-sm flex items-center justify-center rounded-md'>
              {selectedFood.nguyenlieu2}
            </div>
          </div>
          <div className='text-[#ED7D31] text-3xl font-bold'>
            {selectedFood.giatu} - {selectedFood.giaden} VNĐ
          </div>
        </div>
      </div>

      <div className='pb-48 container'>
        <Carousel {...settings} className='custom-carousel'>
          {foods.map((food) => (
            <div
              key={food.id}
              className='flex flex-col items-center cursor-pointer'
              onClick={() => setSelectedFood(food)} // Khi click, chọn món ăn này
            >
              <img src={food.image} alt={food.ten} className='w-[120px] h-[120px] object-cover rounded-lg' />
              <p className='mt-2 text-lg font-semibold text-start ml-4'>{food.ten}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
