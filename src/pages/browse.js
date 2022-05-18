import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'

import { fetchAllExhibits } from '../components/reduxFeatures/exhibits/exhibitsSlice'

import { BrowseContainer } from '../containers/browse'
import { useContent } from '../hooks/index'
import { selectionFilter } from '../utils/index'



export default function Browse() {
  const dispatch = useDispatch()
  
  const { exhibits } = useContent('exhibits');
  const slides = selectionFilter({ exhibits });

  const router = useRouter()
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then(user => setUser(user.attributes.nickname))
    .catch(() => {router.push('/login')})
  }, [])

  useEffect(() => {
    dispatch(fetchAllExhibits())
  }, [])

  if (!user) return null
  return (
      <main>
        <BrowseContainer slides={slides} />
      </main>
  )
}