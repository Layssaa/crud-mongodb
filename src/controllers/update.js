const UpdateBook = async (req, res) => {
    console.log('UPDATE BOOKS');

    try {
        res.status(200).send({data: "update"})
    } catch (error) {
        res.status(200).send({ status: "500", msg: "Updated books" });
    }
   


    // update
    // https://mongoosejs.com/docs/tutorials/findoneandupdate.html
};

module.exports = { UpdateBook };
