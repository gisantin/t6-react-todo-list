import React from 'react'
import './PageNotFound.css'
import NotFoundImage from './notFoundImage.jpg'



function PageNotFound(){
    return(
        <div className='page-not-found'>
            <h1>Página não encontrada</h1>
            <img src={NotFoundImage} />
        
        </div>
    )
}

export default PageNotFound