# imagemin-min

[![i:npm]][l:npm]
[![i:ci]][l:ci]
[![i:size]][l:size]
[![i:npm-dev]][l:npm]

Like [imagemin][l:imagemin] but batteries-included

[i:npm]: https://img.shields.io/npm/v/imagemin-min
[i:npm-dev]: https://img.shields.io/npm/v/imagemin-min/dev
[l:npm]: https://npm.im/imagemin-min
[i:ci]: https://img.shields.io/github/workflow/status/dr-js/imagemin-min/ci-test-tag
[l:ci]: https://github.com/dr-js/imagemin-min/actions?query=workflow:ci-test-tag
[i:size]: https://packagephobia.now.sh/badge?p=imagemin-min
[l:size]: https://packagephobia.now.sh/result?p=imagemin-min

currently support:
- Ubuntu 18.04 (x64)
- Windows 10 (x64)
- MacOS latest (x64)

currently bundled image optimizer:
- jpg: [MozJPEG][l:mozjpeg] (pre-built binary)
- gif: [Gifsicle][l:gifsicle] (pre-built binary)
- png: [Pngquant][l:pngquant] (pre-built binary)
- svg: [SVGO][l:svgo] (dist browser bundle)

[l:imagemin]: https://github.com/imagemin
[l:mozjpeg]: https://github.com/mozilla/mozjpeg
[l:gifsicle]: https://github.com/kohler/gifsicle
[l:pngquant]: https://github.com/kornelski/pngquant
[l:svgo]: https://github.com/svg/svgo

[//]: # (NON_PACKAGE_CONTENT)

- 📁 [source](source)
  - main source code
- 📄 [SPEC.md](SPEC.md)
  - list of all directly accessible codes, sort of API lockfile

> Note: use a *nix platform to pack `.tgz` and publish to preserve correct file permission
> and keep the 755 file permission on executable binary
