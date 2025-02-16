interface MenuFoodProps {
  Food: string
  image: string
  quantity: number
  backgroundColor: string
  colorFood: string
  color: string
}

export default function MenuFood({ Food, image, quantity, backgroundColor, color, colorFood }: MenuFoodProps) {
  return (
    <div className='flex relative justify-between gap-4 mt-2 py-1 px-3'>
      <img src={image} alt='' className='w-[90px] h-[90px] z-20' />
      <div
        className='w-[298px] h-[100px] rounded-lg absolute left-[60px]'
        style={{
          backgroundColor: `${backgroundColor}`
        }}
      >
        <div className=''></div>
        <div className='flex flex-col ml-14'>
          <p
            style={{
              fontFamily: 'MTD Valky Bold',
              fontSize: '30px',
              fontWeight: '700',
              color: `${colorFood}`
            }}
          >
            {Food}
          </p>
          <p
            className=''
            style={{
              color: `${color}`
            }}
          >
            {quantity} món
          </p>
        </div>
      </div>
    </div>
  )
}
