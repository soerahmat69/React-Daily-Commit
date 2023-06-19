
export function Music(music) {
  return {
    connect(){
        console.log(`Play music genre ${music}`)

    },disconnect(){
        console.log(`Stop music ${music}`)
    }
  }
}

