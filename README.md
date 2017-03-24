# Babylon Voxel Clouds
Voxel clouds for Babylon.js

> Clouds for [Babylon.js](https://github.com/BabylonJS/Babylon.js).

> Best when used with [Noa-Engine](https://github.com/andyhall/noa).

## Example

```js
let cloud_generator = require('babylon-voxel-clouds')();

// If the block is above the clouds level and below the maximum clouds altitude, then set it
if (y >= clouds_generator.get_cloud_level() && y  <= clouds_generator.get_cloud_altitude()) {
    let cloud = clouds_generator.get_cloud_index(x, y, z);
    if (y < clouds_generator.get_cloud_level() + 10) {
        cloud *= (y - clouds_generator.get_cloud_level()) / 10;
    }
    if (cloud > clouds_generator.get_cloud_cutoff()) {
    	// SET BLOCK AS CLOUD
        block.set(x, y, z, 'cloud');
    }
}

```

## Run the Example

1. `git clone git://github.com/Nesh108/babylon-voxel-clouds && cd babylon-voxel-clouds`
1. `npm install`
1. `npm start`

## Install

With [npm](https://npmjs.org) do:

```
npm install --save babylon-voxel-clouds
```

## Release History

* 1.0.0 - initial release

## License

Copyright (c) 2017 Nesh108<br/>

Licensed under the MIT license.