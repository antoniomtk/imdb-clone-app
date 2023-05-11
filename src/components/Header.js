import Link from 'next/link';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import MenuItem from './MenuItem';

const Header = () => {
	return (
		<div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-8'>
			<div className='flex'>
				<MenuItem title='Home' address='/' Icon={AiFillHome} />
				<MenuItem title='About' address='/about' Icon={AiFillInfoCircle} />
			</div>
			<div className=''>
				<Link href='/'>
					<h2 className='text-2xl'>
						<span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>
							IMDB
						</span>
						<span className='text-xl hidden sm:inline'>Clone</span>
					</h2>
				</Link>
			</div>
			<div className=''></div>
		</div>
	);
};

export default Header;
