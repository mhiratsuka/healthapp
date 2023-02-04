import axios, { AxiosResponse, AxiosError } from 'axios'

const baseURL = 'http://localhost:3000'
const endpointUrl = (path: string): string => {
  return `${baseURL}/${path}`
}

interface basicApiType {
  path: string
  error?: (err: AxiosError) => void
}

interface getRequestApiType<T> extends basicApiType {
  callback?: (data: T) => void
  params?: Record<string, unknown>
}

export const getRequest = (
  arg: getRequestApiType
): Promise<void> => {
  async axios
    .get<T>(endpointUrl(arg.path))
    .then(({ data }) => arg.callback?.(data))
    .catch(arg.error)
}

export const getData = async (arg: apiType): Promise<void> => {
  // await client
  //   .get(arg.path)
  //   .then(({ data }) => arg.callback?.(data))
  //   .catch(arg.error)

  try {
    const response: AxiosResponse = await client.get(arg.path)

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

export const postRequest = async (URL: string, data: any): Promise<void> => {
  // TODO: fix type
  try {
    const response: AxiosResponse = await client.post(`/${URL}`, data)

    console.log('show response.')
    console.log(response)
  } catch (error) {
    console.log('show error')
    console.log(error)
    throw error
  }
}

export const patchRequest = async (URL: string, data: any): Promise<void> => {
  // TODO: fix type
  try {
    const response: AxiosResponse = await client.patch(`/${URL}`, data)

    console.log('show response.')
    console.log(response)
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
