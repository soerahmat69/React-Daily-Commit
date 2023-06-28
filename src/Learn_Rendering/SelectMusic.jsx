// NI BUAT KOMPONEN aowkao capslock
// jadi ini buat select nah ntar pas select tu onchange nya ke data target yagess, gw masih 
// kurang bisa klo komponen porpos ke parnet t
// namnya jg blajar awww
function SelectMusic({onchange,value}) {
  return (
    <div> 
      {/* karena gw genrenya rocknya maka gw buat disini aja,selera gw */}
      {/* dapat ide darimana sbenernya klo mau ya liat aja di roadmap.sh ntu pke alur  */}
            <select className=' ring-1 ring-black mx-3 my-2' value={value} onChange={onchange}>
                <option value="PHONK">PHONK RSX</option>
                <option value="PHONK">PHONKER 0Z5</option>
                <option value="ROCK">ACDC OX</option>
            </select>
    </div>
  )
}

export default SelectMusic