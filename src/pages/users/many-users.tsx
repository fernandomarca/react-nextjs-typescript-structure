import { NextPage } from 'next'
import React from 'react'

import UserList from '.'
const ManeUsers: NextPage = () => {
  return (
    <>
      <UserList />
      <UserList />
      <UserList />
    </>
  )
}

export default ManeUsers
