"use client"

import {Arimo} from 'next/font/google'
import {createTheme} from "@mui/material/styles"
import { create } from 'domain'

const arimo = Arimo({
  weight:['400','500','600'],
  subsets:['latin'],
  display:'swap'
})

const theme = createTheme({
  typography:{
    fontFamily:arimo.style.fontFamily
  }
})

export default theme;