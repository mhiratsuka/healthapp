import axios, { AxiosInstance, AxiosResponse } from 'axios'

const client: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
  timeout: 5000,
})

export const getData = async (URL: string): Promise<void> => {
  try {
    const response: AxiosResponse = await client.get(URL)

    console.log('show response.')
    console.log(response)

    console.log('show response data.')
    console.log(response.data)
  } catch (error) {
    console.log('show error')
    console.log(error)
    throw error
  }
}

export const deleteRequest = async (URL: string): Promise<void> => {
  try {
    const response: AxiosResponse = await client.delete(`/${URL}`)

    console.log('show response.')
    console.log(response)
  } catch (error) {
    console.log('show error')
    console.log(error)
    throw error
  }
}
