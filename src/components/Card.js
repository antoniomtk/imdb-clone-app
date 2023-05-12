import Image from 'next/image';
import Link from 'next/link';
import { MdThumbUpOffAlt } from 'react-icons/md';

const Card = ({ result }) => {
   return (
      <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group'>
         <Link href={`/movie/${result.id}`}>
            <Image
               src={`https://image.tmdb.org/t/p/original/${
                  result.backdrop_path || result.posters_path
               }`}
               alt='Image not available'
               width={500}
               height={300}
               className='sm:rounded-t-xl group-hover:opacity-80 transition-opacity duration-200'
               placeholder='blur'
               blurDataURL='/loading.svg'
               style={{ maxWidth: '100%', height: 'auto' }}
            ></Image>
            <div className='p-2'>
               <h2 className='truncate text-lg font-bold'>
                  {result.original_title || result.name}
               </h2>
               <p className='line-clamp-2 text-sm'>{result.overview}</p>
               <p className='flex items-center'>
                  {result.release_date || result.first_air_date}
                  <MdThumbUpOffAlt className='h-5 mr-1 ml-3' />{' '}
                  {result.vote_count}
               </p>
            </div>
         </Link>
      </div>
   );
};

export default Card;
