import Link from 'next/link';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import DarkModeSwitch from './DarkModeSwitch';
import MenuItem from './MenuItem';

const Header = () => {
   return (
      <div className='flex justify-around max-w-6xl sm:mx-auto items-center py-8'>
         <div className='flex'>
            <MenuItem title='Home' address='/' Icon={AiFillHome} />
            <MenuItem title='About' address='/about' Icon={AiFillInfoCircle} />
         </div>
         <div className='flex items-center space-x-5'>
            <DarkModeSwitch />
            <Link href='/'>
               <h2 className='text-2xl'>
                  <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>
                     IMDB
                  </span>
                  <span className='text-xl hidden sm:inline'>Clone</span>
               </h2>
            </Link>
         </div>
      </div>
   );
};

export default Header;
