//  gada import react ? yaemang ini funcman functional biasa doang react mah gaikut campur tangan 
// awoakowoaw 
 function getImageUrl(person) {
    // ni yang gw bilang return nya cuman text 
  return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }

// ni sama yaa gess
  function Avatar({person,size}){

return(
  <>
  <img src={getImageUrl(person)} className="rounded-full" alt={person.name} height={size} width={size} />
  </>
)
  }
// la kok bisa dua exporet yaemang bisa yagess soalnya 2 komponen tu mau gw pakein loller
// ni komen gaje abiss aowkawo
export {Avatar, getImageUrl}