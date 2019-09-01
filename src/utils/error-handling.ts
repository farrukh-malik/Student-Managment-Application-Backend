module.exports = (err: any, req: any, res: any)=>{
    console.log('jhjkhh',err);
    return res.status(err.status).json({
        message: 'error'
    });
}