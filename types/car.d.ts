export interface CarVariant {
  name: string
  price: number
  rangeMin: number
  rangeMax: number
  chargeTime: number
  chargePower: number
}

export type CarCategory = 'VF' | 'green'

export interface Car {
  name: string
  slug: string
  imageUrl: string
  seatCount: number
  tags: string[]
  category: CarCategory
  variants: CarVariant[]
  createdAt?: Date
}