import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import { Dropdown, MenuProps, Space } from 'antd'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const items: MenuProps['items'] = [
    {
      label: (
        <a
          href='https://www.antgroup.com'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            fontSize: '30px'
          }}
        >
          1st menu item
        </a>
      ),
      key: '0'
    },
    {
      label: (
        <a href='https://www.aliyun.com' target='_blank' rel='noopener noreferrer'>
          2nd menu item
        </a>
      ),
      key: '1'
    }
  ]
  return (
    <div className='px-3 py-2 '>
      <div className='container'>
        <div className='flex items-center justify-between z-10 '>
          <div className='flex items-center gap-3'>
            <img src='logo.png' alt='' className=' h-[70px]' />
            <div>
              <div
                className='text-xl'
                style={{
                  fontFamily: 'MTD Valky Bold'
                }}
              >
                Nhà hàng
              </div>
              <div
                className='uppercase text-xl'
                style={{
                  fontFamily: 'MTD Valky Bold'
                }}
              >
                thủy tạ đầm sen
              </div>
            </div>
          </div>
          <div className='flex font-medium z-30 gap-10'>
            <Link to='/' className='text-[#C75D15]'>
              Thực đơn
            </Link>
            <Dropdown
              menu={{ items }}
              trigger={['click']}
              overlayStyle={{
                width: '350px',
                fontSize: '200px'
              }}
            >
              <a onClick={(e) => e.preventDefault()} className='hover:bg-[orange]'>
                <Space>
                  Sảnh tiệc
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link to='/'>Phòng hội nghị</Link>
            <Link to='/'>Khyến mãi tiệc cưới</Link>
            <div className='flex justify-between items-center bg-gray-100 rounded-lg p-2 mt-[-5px] '>
              <input type='text' className='bg-transparent border border-none outline-none' placeholder='Tìm kiếm' />
              <SearchOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
