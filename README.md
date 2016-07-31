# Lyef flags
[![Build Status](https://travis-ci.org/lyef/lyef-flags.svg?branch=master)](https://travis-ci.org/lyef/lyef-flags)
![Badge size](https://badge-size.herokuapp.com/lyef/lyef-flags/master/dist/Main.min.js.svg)
![Badge gzip size](https://badge-size.herokuapp.com/lyef/lyef-flags/master/dist/Main.min.js.svg?compression=gzip)
[![NPM version](https://badge-me.herokuapp.com/api/npm/lyef-flags.png)](http://badges.enytc.com/for/npm/lyef-flags)

> A react component to show flags of all countries based on [http://flagpedia.net/](flagpedia source).

![Flags from some countries](flags.png)

## Demo

[Live examples](https://lyef.github.io/lyef-flags)

## Installation

```sh
$ npm install --save lyef-flags
```

*Remember to import the styles on `css/main.css` folder to your project.*

## Basic Usage

```jsx
import Flag from 'lyef-flags';

...
render() {
    return (
        <Flag country="br" size="small" />
    );
}
...
```

## Props

- `country` (string) - country innitials. Ex.: us, br...
- `size` (string) - image size - *options*: small, normal, big, ultra.

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

To know more about the architecture or if you want to contribute with this component:
[Contributing Documentation](https://github.com/lyef/lyef-flags/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/lyef/lyef-flags/blob/master/LICENSE.md) @ [lyef](https://lyef.github.io/)
