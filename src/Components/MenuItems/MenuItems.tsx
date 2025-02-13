import Navbar from '../Navbar/Navbar'
import { Carousel } from 'antd'
import './MenuItems.css'

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   backgroundColor: 'black',
// }
// const images = ['beef.png', 'beefsteak.png', 'boluclac.png', 'boxaocairo.png']
// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4, // Hiển thị 4 ảnh mỗi lần
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000
// }
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
  arrows: true // Hiển thị nút điều hướng
}
export default function MenuItems() {
  return (
    <div className='relative bg-gray-200'>
      <Navbar />
      <div className='grid grid-cols-12'>
        <div className='col-span-8'>
          <div className='flex items-center '>
            <img src='beef.png' alt='' className='w-[465px] h-[465px]' />
            <div className='text-3xl flex flex-col gap-4'>
              <div
                className='font-bold text-black'
                style={{
                  fontFamily: 'Manrope'
                }}
              >
                Bò Argentina
              </div>
              <p
                className='uppercase text-[#ED7D31] font-semibold text-5xl'
                style={{
                  fontFamily: 'MTD Valky Bold'
                }}
              >
                Sốt tiêu đen
              </p>
              <div className='border border-x-transparent border-t-transparent border-b-[#ED7D31]' />
              <p
                className='text-2xl'
                style={{
                  fontFamily: 'Manrope'
                }}
              >
                Dipped Argentina beef with black pepper sauce
              </p>
              <div className='flex items-center gap-3'>
                <div className='w-[120px] h-[35px] bg-[#FCBB62] text-white text-sm flex items-center justify-center rounded-md'>
                  Thịt bò
                </div>
                <div className='w-[120px] h-[35px] bg-[#FCBB62] text-white text-sm flex items-center justify-center rounded-md'>
                  Tiêu đen
                </div>
              </div>
              <div
                className=''
                style={{
                  fontFamily: 'Manrope',
                  color: '#ED7D31',
                  fontSize: '40px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 'normal'
                }}
              >
                150.000 - 300.000 VNĐ
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
        <div className='col-span-4'>
          <div className='w-[421px] h-[767px] flex-shrink-0 bg-[#FFFAEC] rounded-[32px] shadow-sm'>
            <div className='flex flex-col'>
              {/* LOGO */}
              <div className='flex items-center justify-center mt-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='161'
                  height='85'
                  viewBox='0 0 161 85'
                  fill='none'
                  className='flex-shrink-0'
                >
                  <g clip-path='url(#clip0_1_65)'>
                    <path
                      d='M143.65 57.49C135.95 56.46 128.65 58.14 121.75 61.34C114.84 64.54 108.1 68.1 101.32 71.57C87.36 78.72 72.96 84.01 56.87 81.94C48.47 80.86 40.93 77.97 36.48 70.12C33.25 64.42 34.43 57.65 39.52 54.13C45.98 49.66 53.09 48.85 60.57 51.59C61.57 51.96 62.94 51.83 63.95 51.44C64.34 51.29 64.43 49.71 64.25 48.87C61.59 36.63 61.95 24.38 63.84 12.09C64.39 8.50998 64.85 4.90998 65.36 1.31998C65.58 -0.390023 64.32 -0.520023 62.04 1.31998C56.94 5.86998 55.8 12.23 54.04 18.36C52.52 23.68 48.96 33.83 47.84 33.85C46.86 33.87 48.73 25.73 49.05 21.66C49.29 18.59 49.5 15.5 49.44 12.43C49.3 5.08998 47.08 3.65998 40.14 6.00998C39.21 6.32998 37.94 5.95998 36.91 5.63998C35.88 5.31998 35.01 4.46998 33.98 4.18998C31.64 3.54998 29.62 4.22998 29.07 6.73998C28.54 9.15998 30.45 9.92998 32.42 10.35C37.08 11.34 37.32 11.43 37.01 16.15C36.14 29.3 31.98 41.36 24.21 52.05C22.51 54.39 20.1 56.36 17.67 58C14.85 59.9 12.1 58.88 10.47 55.9C7.73001 50.91 9.88001 41.72 14.65 38.55C15.35 38.09 16.52 37.62 17.39 37.47C18.6 37.26 19.04 37.21 20.8 37.23C21.24 37.23 18.52 34.75 16.58 34.4C9.92001 33.21 3.93001 36.89 1.15001 43.11C0.800009 43.9 0.490009 44.79 0.290009 45.63C-0.119991 47.35 -0.0899909 49.2 0.290009 50.92C0.450009 51.66 0.720009 52.3 1.02001 53C4.68001 61.65 14.35 64.16 21.72 58.31C23.68 56.76 25.59 54.87 26.82 52.74C34.21 39.93 40.13 26.6 39.48 11.34C39.38 8.99998 40.32 8.22998 42.77 8.23998C41.73 13.69 40.39 18.91 39.82 24.22C39.17 30.32 39.11 36.5 39.02 42.64C38.99 44.84 40.3 46.37 42.79 46.35C44.93 46.33 45.72 45.53 47.07 43.28C48.13 41.52 50.72 35.69 52.99 31.18C54.78 37.65 56.29 43.09 57.67 48.07C52.17 48.84 46.7 49.06 41.55 50.46C35.38 52.15 30.6 56 29.89 62.96C29.2 69.74 32.62 74.57 38.13 78.04C44.26 81.9 51.14 83.4 58.28 83.88C75.36 85.05 91.06 80.53 106.01 72.61C113.41 68.69 120.92 64.91 128.56 61.48C133.25 59.37 138.35 58.75 143.47 60.26C148.57 61.77 151.25 65.95 150.28 70.8C149.44 75 143.97 78.78 140.01 77.88C136.58 77.1 135.53 74.59 136.68 69.66C134.39 68.31 132.12 69.07 130.91 70.87C130.01 72.21 129.67 74.82 130.4 76.14C131.36 77.88 133.42 79.45 135.35 80.16C142.29 82.7 148.68 81.12 154.15 76.37C157.68 73.3 158.15 68.73 155.71 64.64C153 60.1 148.67 58.14 143.63 57.46L143.65 57.49Z'
                      fill='#3F3F41'
                    />
                    <path
                      d='M68.1301 46.9495C72.1301 51.3595 77.3001 52.6795 82.9401 50.8795C85.7201 49.9895 88.2301 48.2695 91.1001 46.7995C91.0401 46.7595 91.3101 46.9095 91.5601 47.0795C96.1101 50.3395 98.4101 48.2195 99.7201 41.6795C100.91 35.7395 103.25 30.1395 106.24 24.8695C107.36 22.8795 108.63 17.7395 111.83 17.1395C112.28 17.0595 112.78 17.3595 112.93 17.7895C113.38 19.0995 112.23 20.4895 111.74 21.7795C109.54 27.6495 106.87 33.3895 105.19 39.4095C104.07 43.4395 103.81 47.8795 104.11 52.0695C104.38 55.8395 106.7 58.9895 110.84 59.7295C114.8 60.4395 117.63 58.2495 119.73 55.1795C121.02 53.2995 121.96 51.1895 123.1 49.0995C129.31 51.6395 132.57 47.3995 135.53 44.0295C138.39 45.7795 140.85 48.1295 143.73 48.8795C152.32 51.1295 163.09 38.9995 160.37 30.4995C159.26 27.0295 155.9 25.9295 152.37 27.9695C152.51 28.3495 152.86 28.6495 153.07 29.0095C156.59 34.9895 155.69 40.3095 150.63 44.7895C149.57 45.7295 147.82 46.7995 146.74 46.5395C145.48 46.2295 144.11 45.6595 143.9 42.0395C143.64 37.4695 145.09 33.7295 145.58 29.1595C145.7 28.0595 145.89 26.7895 145.76 25.6695C145.71 25.2095 145.28 24.8795 144.82 24.9395C143.42 25.1395 141.97 25.2495 140.78 25.8595C139.61 26.4595 138.56 27.7895 138.02 29.0395C136.89 31.6395 136.03 34.3795 135.25 37.1095C134.08 41.2095 130.43 47.5995 127.46 46.9995C125.15 46.5295 125.71 41.7395 125.99 40.1895C126.96 34.8895 129.69 30.8995 130.63 25.5995C130.82 24.5495 130.53 22.7295 129.87 22.3895C128.94 21.8995 127.38 22.2395 126.23 22.6195C125.23 22.9495 124.16 23.6695 123.58 24.5195C119.48 30.5795 117.3 37.2095 119.27 44.4795C120.51 49.0595 119.22 54.0195 115.26 56.8895C112.53 58.8695 110.77 58.2495 110.06 54.9395C109.83 53.8795 109.67 52.6795 109.94 51.6595C111.25 46.7895 112.6 41.9195 114.17 37.1295C115.87 31.8995 117.99 26.8095 119.6 21.5495C120.3 19.2795 120.68 16.1195 118.1 15.0295C115.95 14.1195 112.51 13.8295 110.73 14.9595C107.7 16.8795 105.16 19.8895 103.11 22.9095C101.19 25.7495 100.17 29.1995 98.6101 32.7095C98.7101 30.7095 98.9101 29.0595 98.8201 27.4195C98.7801 26.6495 98.4901 25.2795 97.9601 25.1195C97.1601 24.8795 94.7301 25.4795 94.2201 26.0495C93.0101 27.4195 92.6301 28.7395 92.1601 30.4495C91.2001 33.9295 90.7901 37.5595 90.0901 41.1195C89.3301 44.9295 85.2101 48.9495 81.8501 49.2395C78.5701 49.5195 75.3801 47.1595 74.1801 43.9095C77.6801 42.3595 81.4001 41.2295 84.5401 39.1895C89.2501 36.1295 91.0901 30.9795 89.5601 27.3095C88.1101 23.8295 83.7301 21.8595 78.1601 22.4595C72.3301 23.0895 68.3801 26.4495 66.2701 31.7495C64.1601 37.0595 63.9901 42.4195 68.1001 46.9495H68.1301ZM75.0401 29.6295C76.3701 27.6095 80.3501 24.6495 82.8001 25.9595C85.1401 27.2095 85.3301 29.3895 84.7501 31.6995C83.6201 36.1995 81.0301 39.2795 76.3701 40.5595C73.5101 41.3395 72.5901 39.0795 72.5201 37.6695C72.4801 36.7395 72.4901 33.5195 75.0301 29.6395L75.0401 29.6295Z'
                      fill='#3F3F41'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_65'>
                      <rect width='160.8' height='84.09' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='flex relative mt-2'>
                <img src='beef.png' alt='' className='w-[100px] h-[100px] z-20' />
                <div className='w-[298px] h-[100px] bg-[#FCBB62] rounded-lg absolute left-[60px]'>
                  <div className='flex flex-col ml-14'>
                    <p
                      style={{
                        fontFamily: 'MTD Valky Bold',
                        fontSize: '30px',
                        fontWeight: '700',
                        color: '#FFF'
                      }}
                    >
                      Bò
                    </p>
                    <p className='text-[#FFF]'>4 món</p>
                  </div>
                </div>
              </div>
              <div className='flex relative mt-2'>
                <img src='beef.png' alt='' className='w-[100px] h-[100px] z-20' />
                <div className='w-[298px] h-[100px] bg-[#FFF] rounded-lg absolute left-[60px]'>
                  <div className='flex flex-col ml-14 text-black'>
                    <p
                      style={{
                        fontFamily: 'MTD Valky Bold',
                        fontSize: '30px',
                        fontWeight: '700'
                      }}
                    >
                      Dồi trường
                    </p>
                    <p className=''>4 món</p>
                  </div>
                </div>
              </div>
              <div className='flex relative mt-2'>
                <img src='beef.png' alt='' className='w-[100px] h-[100px] z-20' />
                <div className='w-[298px] h-[100px] bg-[#FFF] rounded-lg absolute left-[60px]'>
                  <div className='flex flex-col ml-14 text-black'>
                    <p
                      style={{
                        fontFamily: 'MTD Valky Bold',
                        fontSize: '30px',
                        fontWeight: '700'
                      }}
                    >
                      Chả giò
                    </p>
                    <p className=''>4 món</p>
                  </div>
                </div>
              </div>
              <div className='flex relative mt-2'>
                <img src='beef.png' alt='' className='w-[100px] h-[100px] z-20' />
                <div className='w-[298px] h-[100px] bg-[#FFF] rounded-lg absolute left-[60px]'>
                  <div className='flex flex-col ml-14 text-black'>
                    <p
                      style={{
                        fontFamily: 'MTD Valky Bold',
                        fontSize: '30px'
                      }}
                    >
                      Gỏi
                    </p>
                    <p className=''>4 món</p>
                  </div>
                </div>
              </div>
              <div className='flex relative mt-2'>
                <img src='beef.png' alt='' className='w-[100px] h-[100px] z-20' />
                <div className='w-[298px] h-[100px] bg-[#FFF] rounded-lg absolute left-[60px]'>
                  <div className='flex flex-col ml-14 text-black'>
                    <p
                      style={{
                        fontFamily: 'MTD Valky Bold',
                        fontSize: '30px'
                      }}
                    >
                      Chim bồ câu
                    </p>
                    <p className=''>4 món</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
