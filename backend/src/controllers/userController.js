export async function votersLogin(req, res) {
    let time = new Date().toLocaleString();
    console.log("logged in at",time,"\n",req.body);
    res.sendStatus(200);
}