var mongoose = require('mongoose');


const who = 'lacapsule'
const password = 'EXIrgUdaFEllfNSH'
const dbname = 'blackboard'
const clusterName = 'cluster0-9xbpy'
const URI_BDD = `mongodb+srv://${who}:${password}@${clusterName}.mongodb.net/${dbname}?retryWrites=true&w=majority`

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(URI_BDD,
  options,
  function (err) {
    console.log(err);
  }
);
