import { probeSync, createArgListPack, quickRunAsync } from '../function.js'

// [REFERENCE]
// - https://packages.debian.org/trixie/gifsicle # version 1.96-1 (2025/12)
// - https://pkgs.alpinelinux.org/packages?name=gifsicle&branch=v3.23 # version 1.96-r0 (2025/12)
// - https://github.com/kohler/gifsicle # version 1.96 (2025/12)
// - https://github.com/imagemin/gifsicle-bin/tree/master/vendor
// - https://github.com/imagemin/imagemin-gifsicle/blob/master/index.js

// NOTE: now just try use system binary, no bundled binary

// $ gifsicle --version
//   LCDF Gifsicle 1.92
const { /* getArgs, setArgs, */ check, verify } = createArgListPack(
  () => probeSync([ 'gifsicle', '--version' ], 'LCDF Gifsicle 1.')
    ? [ 'gifsicle' ]
    : undefined,
  'expect "gifsicle" in PATH'
)

const DEFAULT_ARG_LIST = [
  // '--optimize=1', //                               size bloat          |  ~0.32s, 3.9MB -> 4.2MB
  // '--optimize=2', //                               same                |  ~0.49s, 3.9MB -> 3.7MB
  '--optimize=1', '--lossy', //                       same-ish            |  ~0.62s, 3.9MB -> 2.4MB
  // '--optimize=2', '--lossy', //                    same-ish            |  ~1.29s, 3.9MB -> 2.3MB
  // '--optimize=1', '--lossy', '--colors', '192', // minimal detail loss |  ~0.70s, 3.9MB -> 2.3MB
  // '--optimize=2', '--lossy', '--colors', '192', // minimal detail loss |  ~1.39s, 3.9MB -> 2.2MB
  // '--optimize=3', '--lossy', '--colors', '192', // minimal detail loss |  ~4.24s, 3.9MB -> 2.1MB
  // '--optimize=1', '--lossy', '--colors', '128', // small detail loss   |  ~0.76s, 3.9MB -> 2.0MB
  // '--optimize=2', '--lossy', '--colors', '128', // small detail loss   |  ~1.45s, 3.9MB -> 2.0MB
  // '--optimize=3', '--lossy', '--colors', '128', // small detail loss   |  ~3.99s, 3.9MB -> 1.9MB

  '--no-warnings', '--no-app-extensions'
]

const configGifsicleProcessor = (argList = DEFAULT_ARG_LIST) => {
  const run = async (buffer) => {
    const [ stdoutBuffer ] = await quickRunAsync([ ...verify(), ...argList ], buffer)
    return stdoutBuffer
  }

  return { check, verify, run }
}

export {
  configGifsicleProcessor
}
