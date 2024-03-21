const dbConfig = require("./src/config/dbconfig");
const app = require("./src/server.js");
const PORT = 3000;


const startServer = async () => {
    try {
        await dbConfig();
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
    
    } catch (error) {
        console.log(error);
    }
};

startServer();



