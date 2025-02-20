import Navbar from '../Navbar/Navbar'
import './MenuItems.css'
import OrangeCircle from '../OrangeCircle'
import Food from '../Food'
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/firebaseConfig'
import { FoodType } from '~/types/Food'
import Menu from '../Menu'

export default function Dish() {
  const [foods, setFoods] = useState<FoodType[]>([])
  const [selectedFood, setSelectedFood] = useState<FoodType | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả')

  useEffect(() => {
    const fetchFood = async () => {
      try {
        // const querySnapshot = await getDocs(collection(db, 'foods'))

        // if (!querySnapshot.empty) {
        //   const doc = querySnapshot.docs[0]
        //   const firstFood: FoodType = {
        //     id: doc.id,
        //     ...doc.data()
        //   } as FoodType // Ép kiểu an toàn

        //   setSelectedFood(firstFood)
        // } else {
        //   setSelectedFood(null) // Đảm bảo không có undefined
        // }

        //
        const querySnapshot = await getDocs(collection(db, 'foods'))
        const foodList: FoodType[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        })) as FoodType[]

        setFoods(foodList)
        if (foodList.length > 0) {
          setSelectedFood(foodList[0]) // Chọn món đầu tiên mặc định
          setSelectedCategory(foodList[0].danhmuc) // Mặc định chọn danh mục đầu tiên
        }
        // Lấy danh mục từ dữ liệu món ăn
        // const uniqueCategories = ['Tất cả', ...new Set(foodList.map((food) => food.danhmuc))]
        // setCategories(uniqueCategories)
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Firestore:', error)
      }
    }

    fetchFood()
  }, [])

  return (
    <div className='relative bg-gray-200 h-screen'>
      <Navbar />
      <OrangeCircle />
      <img src='object.png' alt='' className='absolute bottom-0 right-0 z-0 w-[600px] h-[300px]' />

      {/* Chỉ hiển thị một món ăn */}
      <div className='grid grid-cols-12 z-10 gap-40'>
        <Food selectedFood={selectedFood} foods={foods} setSelectedFood={setSelectedFood} />
        <Menu foods={foods} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </div>
    </div>
  )
}
