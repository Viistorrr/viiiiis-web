export function Logomark(props) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <path
        d="M6900 5555 c-18 -21 -5 -47 22 -43 26 3 37 36 16 49 -18 12 -24 11
-38 -6z"
      />
      <path
        d="M7182 5561 c-21 -13 -10 -46 16 -49 27 -4 40 22 22 43 -14 17 -20 18
-38 6z"
      />
      <path
        d="M6710 5345 c0 -59 74 -166 148 -214 179 -115 415 -55 522 132 34 59
40 110 13 105 -9 -2 -23 -22 -31 -46 -8 -25 -37 -68 -68 -101 -71 -77 -132
-104 -234 -105 -66 -1 -84 3 -142 32 -77 38 -129 94 -158 169 -20 54 -50 71
-50 28z"
      />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg viewBox="0 0 106 40" aria-hidden="true" {...props}>
      <Logomark width="40" height="40" className="fill-yellow-400" />
    </svg>
  )
}
