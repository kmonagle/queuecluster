var q = 'tasks';

var url = process.env.CLOUDAMQP_URL || "amqp://localhost";
var open = require('amqplib').connect(url);
const prefix = "" + Math.random();

// Consumer
open.then(function(conn) {
  var ok = conn.createChannel();
  ok = ok.then(function(ch) {
    ch.assertQueue(q);
    ch.consume(q, function(msg) {
      if (msg !== null) {
        console.log(prefix + " got:");
        console.log(msg.content.toString());
        ch.ack(msg);
      }
    });
  });
  return ok;
}).then(null, console.warn);
