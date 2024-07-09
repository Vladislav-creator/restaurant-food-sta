
"use client";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './components/Redux/store'; // пути могут отличаться
import { Inter } from "next/font/google";
 import Header from './components/Header/Header';
import "./globals.css";
import 'leaflet/dist/leaflet.css';
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
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