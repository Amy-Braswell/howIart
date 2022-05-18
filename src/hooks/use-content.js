import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'



export default function useContent(target) {
  const [content, setContent] = useState([]);

  const exhibits = useSelector(state => state.allExhibits)

  const selection = useSelector(state => state.selectionFilter)

  useEffect(() => {

    if(exhibits){

      let selectedTarget
      
      if (selection === 'SHOW_ALL'){
        selectedTarget = exhibits
        // console.log({selectedTarget})
      } 

      if(selection == 'SHOW_NEW') {
        const newExhibitsList = () => {
          const now = (Math.round(Date.now() / 1000))
          const sevenDays = now - 604800
          selectedTarget = exhibits.filter((item) => item.startDate > sevenDays);
          // console.log({selectedTarget})
        }
        newExhibitsList()
      }

      if(selection == 'SHOW_ENDING') {
        const endingExhibitsList = () => {
          const now = (Math.round(Date.now() / 1000))
          const sevenDays = now - 604800
          selectedTarget = exhibits.filter((item) => item.endDate > now && item.endDate < sevenDays);
          // console.log({selectedTarget})
        }
        endingExhibitsList()
      }

    setContent(selectedTarget); 
    }
}, [exhibits, selection])

  return { [target]: content };
}
