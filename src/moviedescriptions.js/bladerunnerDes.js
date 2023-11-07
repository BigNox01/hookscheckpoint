import React from 'react'
import DataBase from '../DataBases/movieDataBase'

export default function MovieDes() {
  return (
    <div>
        <h1>Description</h1>
        <p>
            {DataBase.description}
        </p>
    </div>
  )
}
