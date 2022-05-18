/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGallery = /* GraphQL */ `
  mutation CreateGallery(
    $input: CreateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    createGallery(input: $input, condition: $condition) {
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
export const updateGallery = /* GraphQL */ `
  mutation UpdateGallery(
    $input: UpdateGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    updateGallery(input: $input, condition: $condition) {
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
export const deleteGallery = /* GraphQL */ `
  mutation DeleteGallery(
    $input: DeleteGalleryInput!
    $condition: ModelGalleryConditionInput
  ) {
    deleteGallery(input: $input, condition: $condition) {
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
export const createExhibit = /* GraphQL */ `
  mutation CreateExhibit(
    $input: CreateExhibitInput!
    $condition: ModelExhibitConditionInput
  ) {
    createExhibit(input: $input, condition: $condition) {
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
export const updateExhibit = /* GraphQL */ `
  mutation UpdateExhibit(
    $input: UpdateExhibitInput!
    $condition: ModelExhibitConditionInput
  ) {
    updateExhibit(input: $input, condition: $condition) {
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
export const deleteExhibit = /* GraphQL */ `
  mutation DeleteExhibit(
    $input: DeleteExhibitInput!
    $condition: ModelExhibitConditionInput
  ) {
    deleteExhibit(input: $input, condition: $condition) {
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
export const createArtwork = /* GraphQL */ `
  mutation CreateArtwork(
    $input: CreateArtworkInput!
    $condition: ModelArtworkConditionInput
  ) {
    createArtwork(input: $input, condition: $condition) {
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
export const updateArtwork = /* GraphQL */ `
  mutation UpdateArtwork(
    $input: UpdateArtworkInput!
    $condition: ModelArtworkConditionInput
  ) {
    updateArtwork(input: $input, condition: $condition) {
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
export const deleteArtwork = /* GraphQL */ `
  mutation DeleteArtwork(
    $input: DeleteArtworkInput!
    $condition: ModelArtworkConditionInput
  ) {
    deleteArtwork(input: $input, condition: $condition) {
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
