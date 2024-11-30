export interface Content {
  data: string
  type: string
}

export interface Chat {
  loading: boolean
  contents: Content[]
}
