constexpress=require('express');
constapp=expres();
constpath=require('path');

app.us(express.static(__dirname+'/dist'));

app.listen(process.env.PORT||3000);


//PathLocationStradegy
app.get('/'function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

console.log('Console Listening');
