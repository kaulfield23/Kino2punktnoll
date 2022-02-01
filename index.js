import app from './src/app.js';
/* app.listen(5080); */
const PORT = process.env.PORT || 5080;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});