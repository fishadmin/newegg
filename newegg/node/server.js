let express=require('express');
let app = express();
app.listen(3000)
app.use(express.static('./../../newegg'));

let goods = require("./../routes/goods");
app.use("/activitygoods",goods);

