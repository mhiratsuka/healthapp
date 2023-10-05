export interface journalType {
  id: number
  title: string
  from_date: Date
  to_date: Date
  category: string
  note: string
  pet_id: number
  created_at: Date
  update_at: Date
}

export interface petType {
  id: number
  name: string
  kind: string
  birthday: Date
  user_id: number
  sex_id: number
  created_at: Date
  update_at: Date
}
