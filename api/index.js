// to init the application
import app from './app';

async function main () {
    const port = process.env.PORT || 3000;
    // app.get('*', (req, res) => res.status(200).send({
//     message:'Welcome to this API'
// }))
    await app.listen(port)
    console.log(`Server is running on PORT ${port}`);
}

main()

