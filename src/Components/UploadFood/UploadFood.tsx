import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { Button, Input, message } from 'antd'
import { db } from '~/firebaseConfig'
import UploadImage from '../UploadImage/UploadImage'

const UploadFood = () => {
  const [id, setId] = useState('')
  const [ten, setTen] = useState('')
  const [danhmuc, setDanhmuc] = useState('')
  const [dikem, setDikem] = useState('')
  const [mieuta, setMieuta] = useState('')
  const [nguyenlieu1, setNguyenLieu1] = useState('')
  const [nguyenlieu2, setNguyenLieu2] = useState('')
  const [giatu, setGiaTu] = useState('')
  const [giaden, setGiaDen] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {
    if (!ten || !image) {
      message.error('Vui lòng nhập đầy đủ thông tin!')
      return
    }

    setLoading(true)
    try {
      // Lưu dữ liệu vào Firestore
      await addDoc(collection(db, 'foods'), {
        id,
        ten,
        dikem,
        mieuta,
        nguyenlieu1,
        nguyenlieu2,
        giatu,
        giaden,
        image,
        danhmuc
      })

      message.success('Thêm món ăn thành công!')
      setDikem('')
      setGiaDen('')
      setGiaTu('')
      setImage('')
      setMieuta('')
      setNguyenLieu1('')
      setNguyenLieu2('')
      setTen('')
      setId('')
      setDanhmuc('')
    } catch (error) {
      message.error('Lỗi khi upload món ăn!')
      console.error(error)
    }
    setLoading(false)
  }

  return (
    <div className='p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4'>
      <h2 className='text-lg font-semibold text-center'>Thêm Món Ăn</h2>
      <Input placeholder='Tên món ăn' value={ten} onChange={(e) => setTen(e.target.value)} />
      <Input placeholder='Tên Danh Muc' value={danhmuc} onChange={(e) => setDanhmuc(e.target.value)} />
      <Input value={dikem} onChange={(e) => setDikem(e.target.value)} placeholder='Di kem' />
      <Input value={id} onChange={(e) => setId(e.target.value)} placeholder='Id' />
      <Input value={mieuta} onChange={(e) => setMieuta(e.target.value)} placeholder='mieu ta' />
      <Input value={nguyenlieu1} onChange={(e) => setNguyenLieu1(e.target.value)} placeholder='nguyen lieu1' />
      <Input value={nguyenlieu2} onChange={(e) => setNguyenLieu2(e.target.value)} placeholder='nguyen lieu 2' />
      <Input value={giatu} onChange={(e) => setGiaTu(e.target.value)} placeholder='gia tu' />
      <Input value={giaden} onChange={(e) => setGiaDen(e.target.value)} placeholder='gia den' />
      <Input value={image} onChange={(e) => setImage(e.target.value)} placeholder='anh' />
      <UploadImage />
      <Button type='primary' onClick={handleUpload} loading={loading} block>
        {loading ? 'Đang tải lên...' : 'Thêm món ăn'}
      </Button>
    </div>
  )
}

export default UploadFood
