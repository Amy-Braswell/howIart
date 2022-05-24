import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { fetchFeaturedExhibit } from '../components/reduxFeatures/featuredExhibit/featuredExhibitSlice'
import { Card, Header, Loading } from '../components';
import { FooterContainer } from '../containers/footer';
import { SignOut } from '../components/reduxFeatures/Redux/actions/user'


// This is most of the logic that you see on the Browse Page


export function BrowseContainer({ slides }) {
  const dispatch = useDispatch()
  const router = useRouter()
  
  const [category, setCategory] = useState('exhibits');
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);
  const [user, setUser] = useState(null)
  // const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    getUser()
  }, [])
 
  useEffect(() => {
    dispatch(fetchFeaturedExhibit())
  }, []);

  const featuredExhibit = useSelector(state => state.featuredExhibit)
  
  useEffect(() => {
    setSlideRows(slides[category])
    setLoading(false)
  }, [slides, category]);

  // Put filter system back in actual app...
  // useEffect(() => {
  //   const fuse = new Fuse(slideRows, { keys: ['data.gallery.name'] });
  //   const results = fuse.search(searchTerm).map(({ item }) => item);

  //   filteredGalleries.filter((gallery) =>
  //         gallery.name.toLowerCase().includes(search.toLowerCase()) ||
  //         gallery.exhibits.items[0].title.toLowerCase().includes(search.toLowerCase()) ||
  //         gallery.exhibits.items[0].artist[0].toLowerCase().includes(search.toLowerCase())
  //       )

  //   if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
  //     setSlideRows(results);
  //   } else {
  //     setSlideRows(slides[category]);
  //   }
  // }, [searchTerm]);

  async function getUser() {
    try {
      await Auth.currentAuthenticatedUser()
      .then(user => setUser(user.attributes.nickname))
    }
      catch {router.push('/login')}
  } 
  
  async function handleSignOut(){
    try {
      await Auth.signOut()
      dispatch(SignOut())
      router.push('/login')
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  if(featuredExhibit.gallery && user){
  return(
    <div>
      {loading 
      ? <Loading /> 
      : 
      <>
      <Header bg={false}>
        <Header.FeaturedExhibitContainer>
          <Header.FeaturedExhibitContainerImg src={featuredExhibit.showHero}/>
          
          <Header.Frame>
            <Header.Group>
              <Link href={`/`}>
                <a><Header.Logo src='../logo.png' alt="iArt" /></a>
              </Link>
            </Header.Group>

            <Header.Group>
              {/* Put back in actual app... */}
              {/* <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
              <Header.Profile>
                <FontAwesomeIcon className="white" icon={faUser} />
                <Header.Dropdown>
                  <Header.Group>
                    <FontAwesomeIcon className="white" icon={faUser} /> 
                    <Header.TextLink>{user}</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={handleSignOut}>Logout</Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>

  
          <Header.Feature>
            <Link target="blank" href={`/exhibit/[id]`} as={`/exhibit/${featuredExhibit.id}`}> 
              <a target="_blank">
                  <Header.MetaInfoContainer>
                    <Header.MetaLogo src={featuredExhibit.gallery.logo} alt={featuredExhibit.gallery.website}/>     
                    <Header.FeatureCallOut>Visit {featuredExhibit.gallery.name} Now!</Header.FeatureCallOut>
                    <Header.GoButton>Go</Header.GoButton>
                  </Header.MetaInfoContainer>
              </a>
            </Link>
          </Header.Feature>
        </Header.FeaturedExhibitContainer>
      </Header>

        <Card.Group>
          {slideRows.map((slideItem) => (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Row>
              <Card.Entities>
                {slideItem.data.map((item) => (
                  <Card.Item key={item.id} item={item}>
                    <Card.Image src={item.showHero} alt={item.title}/>
                    <Card.Meta>
                    <Card.MetaLogoContainer>
                      <Card.MetaLogo src={item.gallery.logo} alt={item.gallery.website}/>
                      </Card.MetaLogoContainer>
                        <Card.SubTitle>{item.gallery.name}</Card.SubTitle>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              </Card.Row>
              <Card.Feature category={category}>
                  {/* <Card.GoButton>Go</Card.GoButton> */}
              </Card.Feature>
            </Card>
          ))}
        </Card.Group>
      <FooterContainer />
    </>         
    }
    </div>
  )} else {
    return (
      <Loading /> 
    )
  }
}