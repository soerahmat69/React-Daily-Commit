//  komponen unutk reactive jadi nanti yangdi return ni object yang memiliki method ya gess
// lupa gw di object ini ada 2 data konek sma diskonek
// yaa tau sndri lah fungsinya buat apa NOOB
export function Music(music) {
  return {
    connect(){
        console.log(`Play music genre ${music}`)

    },disconnect(){
        console.log(`Stop music ${music}`)
    }
  }
}

