
function test(){
    console.log("test fucntion")
    // next()
}

module.exports = function(app){



    app.get('/',function(req,res){
        res.render('index.html')
    });

    app.get('/about',function(req,res){
        res.render('about.html');
    });

    app.get('/example', function (req, res, next) {
        console.log('the response will be sent by the next function ...')
        next()
    }, function (req, res) {
        res.send('Hello from B!')
    })

    app.get('/example2', function (req, res, next) {
        console.log('the response will be sent by the next function ...')
        next()
    });

    app.get('/user/:id/', function(req, res){
        console.log(req.params)
        console.log(req.query)
        res.send("succcess")
    })

    // app.use(test)

}