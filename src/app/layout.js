import Header from '../components/Header';
import Providers from './Providers';

import './globals.css';

export const metadata = {
   title: 'IMDB Clone AP7',
   description: 'Next JS IMDB Application',
};

export default function RootLayout({ children }) {
   return (
      <>
         <html lang='en'>
            <body>
               <Providers>
                  {/* Header */}
                  <Header />
                  {/* Navbar */}
                  {/* Search Box */}
                  {children}
               </Providers>
            </body>
         </html>
      </>
   );
}
