import React from 'react'

const Sass = () => {
    return (
        <div>
            <h1>Learning Sass</h1>
            <div className="card">
                <div className="card__image">image</div>
                <div className="card__heading">heading</div>
                <div className="card__para--italic">para</div>
                <div className="card__para--bold">para</div>
            </div>
            <button className="btn btn--primary"></button>
            <button className="btn btn--secondary"></button>
        </div>
    )
}

export default Sass
