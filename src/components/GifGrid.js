import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs( category )
          .then(setImages)
    }, [ category ])


    return (
      <>
        <h2> { category } </h2>  
        <div className="card-grid">
          <ol>
              { 
                images.map( (img) => (
                    <GifGridItem
                      key={ img.id } 
                      { ...img }
                    />
                ))
              }
          </ol>
        </div>
      </>
    )
}
