import React, {useEffect, useState} from 'react'
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`, {
      headers: {
        Authorization: `token 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`
      }
    })
    const data = await response.json();
    setUsers(data)
    setLoading(false)
  }

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults