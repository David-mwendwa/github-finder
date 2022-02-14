import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom' // for v6
import GithubContext from '../context/github/GithubContext'

function User() {
  const {getUser, user} = useContext(GithubContext)

  const params = useParams() // for v6

  useEffect(() => {
    getUser(params.login)
  })
  return (
    <div>User</div>
  )
}

export default User