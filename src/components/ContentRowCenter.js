import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GamesInDb from './GamesInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <GamesInDb />

        </div>
    )
}

export default ContentRowCenter;