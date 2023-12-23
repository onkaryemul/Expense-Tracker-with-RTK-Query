const model = require('../models/model');


// POST Request: http://localhost:3001/api/categories
async function createCategories(req, res) {
    try {
        const Create = new model.Categories({
            type: "Savings", // "Expense", // "Investment", 
            color: "#1F3B5C", // "#C43095" // "#FCBE44"
        });

        const savedCategory = await Create.save();

        return res.json(savedCategory);
    } catch (err) { // Handle error
        return res.status(400).json({ message: `Error while creating categories: ${err}` });
    }
}


// GET Request: http://localhost:3001/api/categories
async function getCategories(req, res) {
    try {
        const data = await model.Categories.find({});
        // const filter = await data.map(v => Object.assign({}, { type: v.type, color: v.color } ));
        const filter = data.map(v => ({ type: v.type, color: v.color }));

        return res.json(filter);
    } catch (err) { // Handle error
        return res.status(500).json({ message: `Error while fetching categories: ${err}` });
    }
}


// POST Request: http://localhost:3001/api/transaction
async function createTransaction(req, res) {
    try {
        if (!req.body) {
            return res.status(400).json("Post HTTP Data not Provided");
        }

        const { name, type, amount } = req.body;

        const create = new model.Transaction({
            name,
            type,
            amount,
            date: new Date()
        });

        await create.save();

        return res.json(create);
    } catch (err) { // Handle error
        return res.status(400).json({ message: `Error while creating transaction: ${err}` });
    }
}


// GET Request: http://localhost:3001/api/transaction
async function getTransaction(req, res) {
    try {
        const data = await model.Transaction.find({});
        return res.json(data);
    } catch (err) { // Handle error
        return res.status(500).json({ message: `Error while fetching transactions: ${err}` });
    }
}


// DELETE Request: http://localhost:3001/api/transaction
async function deleteTransaction(req, res) {
    try {
        if (!req.body) {
            return res.status(400).json({ message: "Request body not found" });
        }

        const result = await model.Transaction.deleteOne(req.body);

        if (result.deletedCount > 0) {
            return res.json("Record deleted successfully");
        } else {
            return res.json("No record found to delete");
        }
    } catch (err) {
        return res.status(500).json({ message: `Error while deleting transaction record: ${err}` });
    }
}



// GET Request: http://localhost:3001/api/labels
async function getLabels(req, res) {
    try {
        const result = await model.Transaction.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "type",
                    foreignField: "type",
                    as: "categoriesInfo"
                }
            },
            {
                $unwind: "$categoriesInfo"
            }
        ]);

        const data = result.map(v => ({
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categoriesInfo['color']
        }));

        res.json(data);
    } catch (error) {
        res.status(400).json({ message: "Lookup Collection Error", error: error});
    }
}




module.exports = {
    createCategories,
    getCategories,
    createTransaction,
    getTransaction,
    deleteTransaction,
    getLabels
};

