import Image from 'next/image';

const API_KEY = process.env.API_KEY;

const getMovie = async (movieId) => {
   const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
   );
   const movieData = await res.json();
   return movieData;
};

const Page = async ({ params }) => {
   const movieId = params.id;
   const movie = await getMovie(movieId);
   return (
      <div className='w-full'>
         <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-6xl mx-auto md:space-x-6'>
            <Image
               src={`https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.posters_path
               }`}
               alt='Movie Poster'
               width={500}
               height={300}
               className='rounded-lg'
               placeholder='blur'
               blurDataURL='/loading.svg'
               style={{ maxWidth: '100%', height: '100%' }}
            ></Image>
            <div className='p-4'>
               <h1 className='text-xl mb-3 font-bold'>
                  {movie.title || movie.name}
               </h1>
               <p className='text-lg mb-3'>
                  <span className='font-semibold mr-1'>Overview:</span>
                  {movie.overview}
               </p>
               <p className='mb-3 font-semibold mr-1'>
                  <span className='mb-3 font-semibold mr-1'>Release Date:</span>
                  {movie.release_date || movie.first_air_date}
               </p>
               <p className='mb-3 font-semibold mr-1'>
                  <span className='mb-3 font-semibold mr-1'>Rating:</span>
                  {movie.vote_count}
               </p>
            </div>
         </div>
      </div>
   );
};

export default Page;
