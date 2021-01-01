import { NextPage } from 'next'
import React, { useCallback, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useRouter } from 'next/router'
import api from '../../services/api'
import { mutate as mutateGlobal } from 'swr'

interface User {
  id: number
  name: string
}

const User: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const [name, setName] = useState('')

  const { data, mutate } = useFetch<User>(`/users/${id}`)

  if (!data) {
    return <p>Carregando...</p>
  }

  const handleNameChange = async () => {
    const response = await api.put<User>(`users/${id}`, {
      name
    })

    mutate(response.data, false)

    mutateGlobal(`users/${id}`, { id, name })
  }

  return (
    <div>
      <ul>
        <h3>{data.id}</h3>
        <h2>{data.name}</h2>
        <input
          value={name}
          type="text"
          name="name"
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => handleNameChange()} type="button">
          Alterar nome
        </button>
      </ul>
    </div>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = useFetch<User[]>('http://localhost:3333/users')

//   const paths = data.map(user => {
//     return {
//       params: { id: user.id }
//     }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

export default User
