
"use client";
import localFont from 'next/font/local'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './components/Redux/store'; 
import Header from './components/Header/Header';
import "./globals.css";
import 'leaflet/dist/leaflet.css';


const myFont = localFont({
  src: '../public/ofont_Isadora_Cyr.ttf',
  display: 'swap',
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={myFont.className}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <main className="container">
              {children}
            </main>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}