/* eslint-disable */

export const getFeaturedExhibit = /* GraphQL */ `
query getFeaturedExhibit {
  listExhibits(filter: {tags: {contains: "featured"}}) {
    items {
      id
      gallery {
        id
        name
        logo
      }
      title
      artist
      date
      endDate
      showHero
      showDescription
      startDate
      walkthrough
    }
  }
}
`

// end date greater than is hard-coded in for Feb 8, 2021
export const currentExhibits = /* GraphQL */ `
query currentExhibits {               
  listExhibits {
    items {
      artist
      curator
      date
      endDate
      exhibitGalleryId
      id
      gallery {
        streetAddress
        email
        id
        logo
        name
        phone
        website
      }
      media
      showDescription
      showHero
      showHeroPhone
      showTeaser
      startDate
      status
      title
      walkthrough
      walkthroughStill
    }
  }
}
`;



export const getGallery = /* GraphQL */ `
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
      id
      name
      logo
      phone
      streetAddress
      city
      state
      postalCode
      email
      website
      exhibits {
        items {
          id
          exhibitGalleryId
          showHero
          showHeroPhone
          title
          media
          date
          ups
          downs
          startDate
          endDate
          artist
          curator
          showTeaser
          showDescription
          tags
          status
          walkthrough
          walkthroughStill
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;


export const listGalleries = /* GraphQL */ `
  query ListGalleries(
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGalleries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logo
        phone
        streetAddress
        city
        state
        postalCode
        email
        website
        exhibits {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getExhibit = /* GraphQL */ `
  query GetExhibit($id: ID!) {
    getExhibit(id: $id) {
      id
      exhibitGalleryId
      showHero
      showHeroPhone
      title
      media
      date
      ups
      downs
      startDate
      endDate
      artist
      curator
      showTeaser
      showDescription
      tags
      includedArtworks {
        id
        artworkExhibitId
        artist
        title
        date
        medium
        dimensions
        image
        exhibit {
          id
          exhibitGalleryId
          showHero
          showHeroPhone
          title
          media
          date
          ups
          downs
          startDate
          endDate
          artist
          curator
          showTeaser
          showDescription
          tags
          status
          walkthrough
          walkthroughStill
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      status
      walkthrough
      walkthroughStill
      gallery {
        id
        name
        logo
        phone
        streetAddress
        city
        state
        postalCode
        email
        website
        exhibits {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      artworks {
        items {
          id
          artworkExhibitId
          artist
          title
          date
          medium
          dimensions
          image
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listExhibits = /* GraphQL */ `
  query ListExhibits(
    $filter: ModelExhibitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExhibits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        exhibitGalleryId
        showHero
        showHeroPhone
        title
        media
        date
        ups
        downs
        startDate
        endDate
        artist
        curator
        showTeaser
        showDescription
        tags
        includedArtworks {
          id
          artworkExhibitId
          artist
          title
          date
          medium
          dimensions
          image
          createdAt
          updatedAt
          owner
        }
        status
        walkthrough
        walkthroughStill
        gallery {
          id
          name
          logo
          phone
          streetAddress
          city
          state
          postalCode
          email
          website
          createdAt
          updatedAt
          owner
        }
        artworks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getArtwork = /* GraphQL */ `
  query GetArtwork($id: ID!) {
    getArtwork(id: $id) {
      id
      artworkExhibitId
      artist
      title
      date
      medium
      dimensions
      image
      exhibit {
        id
        exhibitGalleryId
        showHero
        showHeroPhone
        title
        media
        date
        ups
        downs
        startDate
        endDate
        artist
        curator
        showTeaser
        showDescription
        tags
        includedArtworks {
          id
          artworkExhibitId
          artist
          title
          date
          medium
          dimensions
          image
          createdAt
          updatedAt
          owner
        }
        status
        walkthrough
        walkthroughStill
        gallery {
          id
          name
          logo
          phone
          streetAddress
          city
          state
          postalCode
          email
          website
          createdAt
          updatedAt
          owner
        }
        artworks {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listArtworks = /* GraphQL */ `
  query ListArtworks(
    $filter: ModelArtworkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtworks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        artworkExhibitId
        artist
        title
        date
        medium
        dimensions
        image
        exhibit {
          id
          exhibitGalleryId
          showHero
          showHeroPhone
          title
          media
          date
          ups
          downs
          startDate
          endDate
          artist
          curator
          showTeaser
          showDescription
          tags
          status
          walkthrough
          walkthroughStill
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
