export interface journalType {
  id?: number
  title: string
  from_date: Date
  to_date: Date
  category: string
  note: string
  pet_id?: number
}

export interface petType {
  id: number
  name: string
  kind: string
  birthday: Date
  user_id: number
  sex_id: number
}
