import { DownOutlined } from '@ant-design/icons'
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
      <div className='flex items-center justify-between z-30 mx-20'>
        <div className='flex items-center gap-3'>
          <img src='logo.png' alt='' className='w-[120px] h-[110px]' />
          <div>
            <div className='text-xl'>Nhà hàng</div>
            <div className='uppercase text-3xl'>thủy tạ đầm sen</div>
          </div>
        </div>
        <div className='flex text-xl font-medium z-30 gap-10'>
          <Link to='/'>Thực đơn</Link>
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
        </div>
      </div>
    </div>
  )
}
