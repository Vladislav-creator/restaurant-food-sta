
"use client";
// import { Provider } from 'react-redux';
// import  store  from './components/Redux/store'; 
// import { Inter } from "next/font/google";
// import Header from './components/Header/Header';
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   return (
//     <Provider store={store}>
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         <main className='container'>
//             {children}
//         </main>
//       </body>
//     </html>
//     </Provider>
//   );
// }

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './components/Redux/store'; // пути могут отличаться
import { Inter } from "next/font/google";
import Header from './components/Header/Header';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            <main className='container'>
                {children}
            </main>
          </body>
        </html>
      </PersistGate>
    </Provider>
  );
}