
// For exhibit filters:
export default function selectionFilter({ exhibits } = []) {

  return {
    exhibits: [
      { title: 'Mixed Media', data: exhibits?.filter((item) =>item.media.reduce((a, b) => a + b).includes("mixedmedia")) },
      { title: 'Painting', data: exhibits?.filter((item) =>item.media.reduce((a, b) => a + b).includes("painting")) },
      { title: 'Photography', data: exhibits?.filter((item) =>item.media.reduce((a, b) => a + b).includes("photography")) },
      { title: 'Sculpture', data: exhibits?.filter((item) =>item.media.reduce((a, b) => a + b).includes("sculpture")) },
    ]
  }
}

// { title: 'Group Shows', data: exhibits?.filter((item) =>item.media.reduce((a, b) => a + b).includes("group")) },
// { title: 'Printmaking', data: exhibits?.filter((item) =>item.media.reduce((a, b) => a + b).includes("printmaking")) },
// { title: 'Sculpture', data: exhibits?.filter((item) =>item.media.reduce((a, b) => a + b).includes("sculpture")) },
   






