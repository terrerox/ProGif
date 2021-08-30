import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon ball']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={ setCategories }/>
            {
                categories.map( category => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    )
}
