import { useState } from 'react'
import { Upload, Button, message } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dcvc3v3vc/image/upload'
const CLOUDINARY_UPLOAD_PRESET = 'ThuyTaRestaurant'

const UploadImage = () => {
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {
    if (!file) {
      message.error('Vui lòng chọn ảnh!')
      return
    }

    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)

      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData
      })

      const data = await response.json()
      if (!data.secure_url) throw new Error('Lỗi upload ảnh!')

      setImageUrl(data.secure_url)
      message.success('Upload thành công!')
    } catch (error) {
      message.error('Lỗi khi upload ảnh!')
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <div className='p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4'>
      <h2 className='text-lg font-semibold text-center'>Upload Ảnh</h2>

      <Upload
        beforeUpload={(file) => {
          setFile(file)
          return false
        }}
        showUploadList={true}
        maxCount={1}
      >
        <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
      </Upload>

      <Button type='primary' onClick={handleUpload} loading={loading} block>
        {loading ? 'Đang tải lên...' : 'Upload Ảnh'}
      </Button>

      {imageUrl && (
        <div className='text-center'>
          <p>Ảnh đã upload:</p>
          <img src={imageUrl} alt='Uploaded' className='w-full h-auto rounded-lg mt-2' />
          <p className='break-all text-sm'>{imageUrl}</p>
        </div>
      )}
    </div>
  )
}

export default UploadImage
