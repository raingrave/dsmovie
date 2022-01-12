import MovieCard from 'components/MovieCard';
import MovieScore from 'components/MovieScore';
import Pagination from 'components/Pagination';
import React from 'react';

function Listing() {
  return (
    <>
      <Pagination />

      <div className="container">
        <div className="row g-3">
          <div className="col col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
          <div className="col col-sm-6 col-lg-4 col-xl-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
