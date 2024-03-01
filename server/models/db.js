const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/todolist', {
    useNewUrlParser: true, 
  useUnifiedTopology: true
  

})
.then(() => {
  console.log('MongoDB Connection Succeeded...');
})
.catch((err) => {
  console.error('Error in DB Connection:', err);
});
