import React, { useEffect, useState} from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"

import "./gallery.css"

//Parent component
const InfiniteImages = () => {

    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
  
    // Fetch images on component mount
    useEffect(() => {
      fetchImages()
    }, [])
  
  
    // API endpoint
    const endpoint = "/.netlify/functions/fetch"
  
    // Fetch Images from functions
    const fetchImages = () => {
      axios(endpoint).then(res => {
        setImages([...images, ...res.data.images])
        setLoading(false)
      })
    }
    return (
      <ImageGallery images={images} loading={loading} fetchImages={fetchImages} />
    )
  }



const ImageGallery = ({ images, loading, fetchImages }) => {
    
    return (
      <InfiniteScroll
        dataLength={images.length}
        next={() => fetchImages()}
        hasMore={true}
        loader={
          <p style={{ textAlign: "center", marginTop: "1%" }}>
            Dont Panic Dogs are incoming <span>🐕 🐕</span>...
          </p>
        }
      >
        <div className="image-grid">
          {!loading
            ? images.map(image => (
                <div className="image-item" key={image.id}>
                  <img src={image.urls.regular} alt={image.alt_description} />
                </div>
              ))
            : ""}
        </div>
      </InfiniteScroll>
    )
  }

  export default InfiniteImages