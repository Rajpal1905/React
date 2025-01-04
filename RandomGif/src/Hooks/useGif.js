import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API_KEY = 'j3mUDaiyvciX9JlwmQAqxwdJAqKtu0e6'

export const useGif = (tag) => {
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`



  const [gif, setGif] = useState('')
  const [loading, setLoading] = useState(false)

  async function fetchData() {
      setLoading(true)
      const { data } = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
      const imageSrc = data.data.images.downsized_large.url
      setGif(imageSrc)
      setLoading(false)
  }

  useEffect(() => {
      fetchData()
  }, [])

  return (
    {
        gif,
        loading,
        fetchData
    }
  )
}
