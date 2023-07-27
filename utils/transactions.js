const moment = require('moment');

const Transaction = require('../models/Transaction');
const Product = require('../models/Product');


/**
 * @description
 * @param {Date} from From DateTime
 * @param {Date} to To DateTime
 * @returns Promise<List<Transaction>>
 */
const getTransactions = (account, from, to) => {
    return Transaction
        .find({ account, performedOn: { $gte: from, $lte: to || moment().format("YYYY-MM-DD") } })
        .sort({ performedOn: -1 });
};

const getTransaction = (account, _id) => {
    return Transaction
        .findOne({ _id, account })
        .populate(['category', 'unit']);
}

module.exports = { getTransactions, getTransaction };