# imagemin-min

[![i:npm]][l:npm]
[![i:ci]][l:ci]
[![i:size]][l:size]
[![i:npm-dev]][l:npm]

Like [imagemin][l:imagemin] but mostly batteries-included

[i:npm]: https://img.shields.io/npm/v/imagemin-min
[i:npm-dev]: https://img.shields.io/npm/v/imagemin-min/dev
[l:npm]: https://npm.im/imagemin-min
[i:ci]: https://img.shields.io/github/actions/workflow/status/dr-js/imagemin-min/.github/workflows/ci-test-tag.yml
[l:ci]: https://github.com/dr-js/imagemin-min/actions?query=workflow:ci-test-tag
[i:size]: https://packagephobia.now.sh/badge?p=imagemin-min
[l:size]: https://packagephobia.now.sh/result?p=imagemin-min

currently support:
- Debian/Alpine Linux (x64/arm64)

currently bundled image optimizer:
- png/jpg/webp: [@min-pack/sharp][l:mp-sharp] repack of [sharp][l:sharp] with pre-built binary
- gif: [Gifsicle][l:gifsicle] (try system binary, then fallback to `@min-pack/sharp`)
- svg: [SVGO][l:svgo] (dist browser bundle)

CLI commands:
- `imagemin-min-in-place file.png file.svg file.webp ...`: process each image file in-place (`imagemin-min file.png file.svg file.webp ...` also work)
- `imagemin-min-test-boot`: test binary working on current platform

[l:imagemin]: https://github.com/imagemin
[l:mp-sharp]: https://github.com/dr-js/min-pack/blob/master/min-pack-sharp
[l:sharp]: https://www.npmjs.com/package/sharp
[l:gifsicle]: https://github.com/kohler/gifsicle
[l:svgo]: https://github.com/svg/svgo

[//]: # (NON_PACKAGE_CONTENT)

- 📁 [source](source)
  - main source code
- 📄 [SPEC.md](SPEC.md)
  - list of all directly accessible codes, sort of API lockfile

> Note: use a *nix platform to pack `.tgz` and publish to preserve correct file permission
> and keep the 755 file permission on executable binary
