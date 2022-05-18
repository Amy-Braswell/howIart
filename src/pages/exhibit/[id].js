import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Auth } from 'aws-amplify'
import { API } from 'aws-amplify';
import { getExhibit, listExhibits} from '../../graphql/queries'
import { useRouter } from 'next/router';
import { fetchFeaturedExhibit } from '../../components/reduxFeatures/featuredExhibit/featuredExhibitSlice'
// import { Loading } from '../../components/accordion';




export default function Exhibit() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    dispatch(fetchFeaturedExhibit())
  }, []);

  const exhibit = useSelector(state => state.featuredExhibit)

  async function getUser() {
    try {
      await Auth.currentAuthenticatedUser()
      .then(user => setUser(user.attributes.nickname))
    }
      catch {router.push('/login')}
  } 


  if (router.isFallback) return <div>Loading...</div>
  return (
    <div className='Exhibit'>
      <div className = "Exhibit-walkthrough-container">
        <iframe 
          title="walkthrough"
          className = "Exhibit-walkthrough"
          src={exhibit.walkthrough} 
          frameBorder="0" 
          allowFullScreen 
          allow="xr-spatial-tracking">
        </iframe>
      </div>

    </div>
  )
}

// export async function getStaticPaths() {
//   const exhibitData = await API.graphql({ query: listExhibits });
//   const exhibitIds = exhibitData.data.listExhibits.items.map(exhibit => ({ params: { id: exhibit.id } }));
//   return {
//     paths: exhibitIds, 
//     fallback: true
//   };
// }

// export async function getStaticProps(context) {
//   const id = context.params.id;
//   const exhibit = await API.graphql({ query: getExhibit, variables: { id }});
//   return {
//     props: {
//       exhibit: exhibit.data.getExhibit
//     }
//   }
// }
