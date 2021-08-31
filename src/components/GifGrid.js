import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category )


    return (
      <>
        <h2> { category } </h2>  
        <div className="card-grid">
          { loading && <p>Loading </p> }
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
