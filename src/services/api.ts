import axios from 'axios'

export const getUsers = async () => {
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  )
  return res.data
}

export const getPosts = async (userId: number) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
  return res.data
}
