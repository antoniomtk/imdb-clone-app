'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BiMoon } from 'react-icons/bi';
import { MdOutlineLightMode } from 'react-icons/md';

const DarkModeSwitch = () => {
   const { systemTheme, theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);
   useEffect(() => setMounted(true), []);
   const currentTheme = theme === 'system' ? systemTheme : theme;
   return (
      <>
         {mounted &&
            (currentTheme === 'dark' ? (
               <MdOutlineLightMode
                  className='text-xl cusror-pointer hover:text-amber-500'
                  onClick={() => setTheme('light')}
               />
            ) : (
               <BiMoon
                  className='text-xl cusror-pointer hover:text-amber-500'
                  onClick={() => setTheme('dark')}
               />
            ))}
      </>
   );
};

export default DarkModeSwitch;
