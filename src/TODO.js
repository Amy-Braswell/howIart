
// DOUBLE CHECK THIS LIST

// 1.)  If show has ended, remove from list – React conditional clause... add end date field in db set - MEDIUM

// 2.) Sort shows by newest opening date – React sort or Server side? –MEDIUM

// 3.) offer viewed / not viewed option in sort bar- MEDIUM

// 3.) Featured Gallery – Placement for a week based off of highest vote  / Limit each user to one vote per week... - HIGH

// 4.) add checkboxes to shows user has viewed - MEDIUM

// 5.) set up payment method process - HIGH

// 6.) add media type to db and search  - LOW



// HIGH - MUST FIX BEFORE ALPHA TEST
// ---------------------------------------------------------------------------------------------

// BEN 
// -------

    // ADD validation for valid email regex

    // TODO - CREATE PAGES FOR LEGAL FORMS

    // FIX INSTALL CLICK OUTSIDE ON CARD FEATURE SO IT CLOSES IF SOMEONE TRIES TO SCROLL


    //  ADD DONATE BUTTON & STYLE DONATE PAGE
    // ---------------------------------------
    //  TODO - replace with button 
    // <Fab size="small"  aria-label="add" className="donate">
    // <FavoriteIcon className="white"/>
    // </Fab>


    // NEED BEN'S HELP
    // ------------------

    // containers/browse.js
    // ---------------------
    // TODO - MAKE SEARCH WORK AGAIN

    
   

// LOW - WOULD BE NICE OR WILL NEED IN FUTURE
// ---------------------------------------------------------------------------------------------

    // SET UP APPOINTMENT WITH AWS TO UNDERSTAND SUBSCRIPTIONS / USING OFFLINE

    // ADD MY LIST BUTTON AND CATEGORY


    // card.js
    // --------
    // TODO - fix hover effect on cards
    // TODO - is there a way to disable scrolling while feature is open?
    // TRY clickoutside from my dropdown component

    // hooks/use-content.js
    // ---------------------
    // TODO - fix the hook so it can work for all three options - all / new / ending
    //   LOOK AT NETFLIX FULL PROGRAM HOOKS > USE-CONTENT.JS FOR EXAMPLE IF NEEDED
    

    // netflix/pages/browse.js
    // ------------------------
    // TODO - fix so utils selection-filter.js can work for category selection for slides
    //   LOOK AT YOUTUBE NETFLIX VIDEO FOR SERIES || FILMS


    // src/pages/browse.js
    // --------------------
    // TODO - change query call to a conditional based on ALL / NEW / ENDING selection


    // endingExhibitsSlice.js
    // ----------------------
    // TODO - change so this filters data already in state at allExhibits
    //    NO NEED TO MAKE ANOTHER QUERY
    // TODO - when actual shows are in database then use this instead
    //   const response = apiResponse.filter((item) => item.endDate > now && item.endDate < sevenDays);


    // newExhibitsSlice.js
    // --------------------
    // TODO - change so this filters data already in state at allExhibits
    //  NO NEED TO MAKE ANOTHER QUERY


 


  