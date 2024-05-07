const testController = (req,res)=>{
    res.status(200).send({
        message : 'welcome route',
        success : true,
    });
};

module.exports = {testController}