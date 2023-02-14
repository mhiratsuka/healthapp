export interface journalType {
  id: number
  from_when: Date
  to_when: Date
}

export interface journalFormType {
  id?: number
  title: string
  from_when: Date
  to_when: Date
  category: string
  note: string
}
