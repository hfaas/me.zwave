'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

// http://devel.pepper1.net/zwavedb/device/32
class Device_064367 extends ZwaveDevice {

  onNodeInit() {
    this.registerCapability('onoff', 'SWITCH_MULTILEVEL');
    this.registerCapability('dim', 'SWITCH_MULTILEVEL');
  }
}

module.exports = Device_064367;