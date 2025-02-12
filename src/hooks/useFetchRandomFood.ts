import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'
import { Food } from '../types/food'

export function useFetchRandomFood() {
  const [food, setFood] = useState<Food | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchRandomFood = async () => {
    setLoading(true)
    try {
      const querySnapshot = await getDocs(collection(db, 'foods'))
      const allFoods = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as Food[]

      if (allFoods.length > 0) {
        const randomFood = allFoods[Math.floor(Math.random() * allFoods.length)]
        setFood(randomFood)
      }
    } catch (error) {
      console.error('Error fetching food:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomFood()
  }, [])

  return { food, loading, fetchRandomFood }
}
