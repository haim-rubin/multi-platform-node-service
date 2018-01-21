const os = require("os");

const serviceModuleByOS = {
  win32: "node-windows",
  linux: "node-linux",
  darwin: "node-mac"
}[os.platform()];

module.exports = require(serviceModuleByOS).Service;
