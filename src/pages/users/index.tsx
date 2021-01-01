import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { useFetch } from '../../hooks/useFetch'

interface User {
  id: number
  name: string
}

const User: NextPage = () => {
  const { data } = useFetch<User[]>('/users')

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User
