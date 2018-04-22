function testLogging() {
  console.log('---------------------------------Welcome------------------------');
  const winston = require('winston');

  winston.log('info', '-------Hello log files!------------', {
    someKey: 'some-value'
  });
}
testLogging();

