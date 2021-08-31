import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category )


    return (
      <>
        <h2 className="animate__animated animate__fadeIn"> { category } </h2>  
        <div className="card-grid">
          { loading && <p className="animate__animated animate__flash">Loading </p> }
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
