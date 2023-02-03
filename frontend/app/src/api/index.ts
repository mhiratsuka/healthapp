import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const client: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
  timeout: 5000,
})

interface apiType {
  path: string
  error?: (err: AxiosError) => void
}
async function getRequest<T>(arg: getRequestApiType<T>): Promise<void> {
  const headers = arg.accessToken
    ? { Authorization: `Bearer ${arg.accessToken}` }
    : {}
  await axios
    .get<T>(endpointUrl(arg.system, arg.path), {
      headers,
      params: arg.params || {},
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: 'repeat' }),
    })
    .then(({ data }) => arg.callback?.(data))
    .catch(arg.error)
}

export const getData = async (arg: apiType): Promise<void> => {
  await client
    .get(arg.path)
    .then(({ data }) => arg.callback?.(data))
    .catch(arg.error)

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
