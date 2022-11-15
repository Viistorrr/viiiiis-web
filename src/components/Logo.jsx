import Image from 'next/image'

export function Logomark(props) {
  return <Image src="/assets/imgs/logos/logo.png" alt="viiiiis" {...props} />
}

export function Logo(props) {
  return <Logomark width="140" height="70" className="fill-yellow-400" />
}
