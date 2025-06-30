import React, { useState } from 'react'
import Fridaydrops from './Fridaydrops'
import kdkd from './assets/img1.jpg'

const Spotify = () => {
  const [music, setmusic] = useState([
    {
      name: 'Astrothunder',
      artist: 'Travis Scott',
      cover: 'https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3'
    },
    {
      name: 'B2B',
      artist: 'cHARLI xcx',
      cover: kdkd
    },
    {
      name: 'Astrothunder',
      artist: 'Travis Scott',
      cover: 'https://i.scdn.co/image/ab67616d0000b273072e9faef2ef7b6db63834a3'
    }
  ])

  return (
    <>
      {music.map((e, i) => (
        <div>
          <Fridaydrops
            musicname={e.name}
            artist={e.artist}
            musiccover={e.cover}
          ></Fridaydrops>
        </div>
      ))}
    </>
  )
}

export default Spotify
