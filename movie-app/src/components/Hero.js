import React, { Fragment } from 'react'

const Hero = () => {
    return (
        <Fragment>
            <section
                className="site-media"
                style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"})` }}>

                <div className="site-wrapper">
                    <h2>The Best Space Movies for you</h2>
                </div>
            </section>

            <div className="favotires-movies">
                <h2>Your Favorites</h2>
            </div>
        </Fragment>
    )
}


export default Hero