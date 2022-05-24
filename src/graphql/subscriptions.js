/* eslint-disable */

export const onCreateGallery = /* GraphQL */ `
  subscription OnCreateGallery($owner: String) {
    onCreateGallery(owner: $owner) {
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
export const onUpdateGallery = /* GraphQL */ `
  subscription OnUpdateGallery($owner: String) {
    onUpdateGallery(owner: $owner) {
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
export const onDeleteGallery = /* GraphQL */ `
  subscription OnDeleteGallery($owner: String) {
    onDeleteGallery(owner: $owner) {
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
export const onCreateExhibit = /* GraphQL */ `
  subscription OnCreateExhibit($owner: String) {
    onCreateExhibit(owner: $owner) {
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
export const onUpdateExhibit = /* GraphQL */ `
  subscription OnUpdateExhibit($owner: String) {
    onUpdateExhibit(owner: $owner) {
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
export const onDeleteExhibit = /* GraphQL */ `
  subscription OnDeleteExhibit($owner: String) {
    onDeleteExhibit(owner: $owner) {
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
export const onCreateArtwork = /* GraphQL */ `
  subscription OnCreateArtwork($owner: String) {
    onCreateArtwork(owner: $owner) {
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
export const onUpdateArtwork = /* GraphQL */ `
  subscription OnUpdateArtwork($owner: String) {
    onUpdateArtwork(owner: $owner) {
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
export const onDeleteArtwork = /* GraphQL */ `
  subscription OnDeleteArtwork($owner: String) {
    onDeleteArtwork(owner: $owner) {
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
