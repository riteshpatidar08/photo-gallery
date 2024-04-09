import React from 'react'

const Grid = ({ photos }) => {
  return (
    <>
    <h1>Our Gallery</h1>

    <div className="grid">
        {photos.map(({ photo, _id }) => (
            <div keya={_id} className="grid_item">
                <img src={`http://localhost:5000/uploads/${photo}`}
                alt="grid_image"
                />
                </div>
        ))}
    </div>
    </>
  )
}

export default Grid