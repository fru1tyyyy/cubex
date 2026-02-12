import * as mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cubex"
});

db.connect((err: any) => {
    if(err){
        console.error("cant be connected ", err);
        return;
    }
    console.log("Connected!!!!");
});
