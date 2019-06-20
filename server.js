var express = require('express');
var app = express();

// require('./router/main')(app);
require('./router/route2')

var birds = require('./router/route2')
app.use('/birds', birds)
 

app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000,function(){
    console.log("Express is running on port 3000");
});