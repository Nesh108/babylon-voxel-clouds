let cloudXZ = 50;
let cloudY = 20;
let cloud_level = 18;
let cloud_altitude = 23;
let cloud_cutoff = .80;
let simplex;

function CloudsGenerator(opts) {
  if (!(this instanceof CloudsGenerator)) return new CloudsGenerator(opts || {});
  cloudXZ = opts.cloudXZ || cloudXZ;
  cloudY = opts.cloudY || cloudY;
  cloud_level = opts.cloud_level || cloud_level;
  cloud_altitude = opts.cloud_altitude || cloud_altitude;
  cloud_cutoff = opts.cloud_cutoff || cloud_cutoff;

  let simplex_noise = require('simplex-noise');
  simplex = new simplex_noise();
}

module.exports = CloudsGenerator;

CloudsGenerator.prototype.get_cloud_index = function(x, y, z) {
  return simplex.noise3D(x / this.get_cloudxz(), y / this.get_cloudy(), z / this.get_cloudxz());
};

CloudsGenerator.prototype.get_cloudxz = function() {
  return cloudXZ;
};

CloudsGenerator.prototype.get_cloudy = function() {
  return cloudY;
};

CloudsGenerator.prototype.get_cloud_altitude = function() {
  return cloud_altitude;
};

CloudsGenerator.prototype.get_cloud_level = function() {
  return cloud_level;
};

CloudsGenerator.prototype.get_cloud_cutoff = function() {
  return cloud_cutoff;
};

