import Image from 'next/future/image'
import Link from 'next/link'

import { Button } from '@components/Button'
import { Container } from '@components/Container'
import { TextField } from '@components/Fields'
import { Logomark } from '@components/Logo'
import { NavLinks } from '@components/NavLinks'
import qrCode from '@images/qr-code.svg'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className=" flex justify-center border-t border-gray-200">
      <Container>
        <div className="flex justify-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
