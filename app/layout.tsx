
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// import PasswordContext from '@/globalContex'
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {UserContextProvider} from "../app/context/userContex";
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'R & S LOTTO MAINTENANCE',
  description: 'Generated by FyberLit',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    
    <html lang="en">
      <body className={inter.className }>
      <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
      >
       
        <UserContextProvider>
          {children}
        </UserContextProvider>
        
    </ThemeProvider>
        </body>
  </html>
  )
}
