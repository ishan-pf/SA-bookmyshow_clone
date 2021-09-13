import React from 'react';
import { Route } from "react-router-dom"

import MovieLayout from '../layouts/MovieDefault';

const MovieHoc = ({ component: Component , ...rest }) => {

    return (
        <>
            <Route 
            
            { ...rest } 

            component = {(props) => (

                <MovieLayout>
                    <Component { ...props} />
                </MovieLayout>
            )
            
            }


            />
        </>
    );
};

export default MovieHoc;