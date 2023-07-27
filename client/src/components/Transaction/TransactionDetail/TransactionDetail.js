import React, { useState } from 'react'
import { connect } from 'react-redux'

import Value from '../../Value/Value'
import Transaction from '../Transaction/Transaction'
import ButtonContainer from '../../ButtonContainer/ButtonContainer'
import { Button, Modal } from '../../UI'
import { deleteTransaction } from '../../../redux/actions/transactionsActions'
import { withRouter } from 'react-router-dom'
import TransactionsPage from '../../../containers/TransactionsPage'


// const useStyles = makeStyles(theme => ({
//     transactionActions: {
//         justifyContent: 'space-evenly',
//         padding: theme.spacing(2),
//     },
//     transactionProduct: {
//         display: 'flex',
//         flexFlow: 'nowrap row',
//         justifyContent: 'space-between',
//         alignContent: 'center',
//         alignItems: 'center',
//         padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,
//     },
//     modalHeader: {
//         padding: theme.spacing(4),
//     },
// }))


const TransactionDetail = ({ transaction, ...props }) => {
    const [isConfirmDeleteTransaction, setIsConfirmDeleteTransaction] = useState(false)
    const { deleteTransaction, history } = props

    if (!transaction) return null

    const deleteTransactionCover = () => {
        deleteTransaction(transaction, () => {
            history.push(`${TransactionsPage.routeName}`)
        })
    }

    return (
        <div>
            <Transaction transaction={transaction} single />
            <hr />
            <div>
                <Button
                    color="secondary"
                    onClick={() => history.push(`${TransactionsPage.routeName}/${transaction._id}/edit`)}
                >
                    Edit
                </Button>
                <Button
                    color="default"
                    onClick={() => setIsConfirmDeleteTransaction(true)}
                >
                    Delete
                </Button>
            </div>
            <hr />
            <div>
                {transaction.productList &&
                    transaction.productList.map(p => (
                        <div key={p.name}>
                            <span className="product-name">{p.name}</span>
                            <Value value={p.value} />
                        </div>
                    ))
                }
            </div>
            <Modal
                open={isConfirmDeleteTransaction}
                onClose={() => setIsConfirmDeleteTransaction(false)}
            >
                <div>
                    <p>
                        Are you sure you want to delete this transaction?
                    </p>
                </div>
                <ButtonContainer>
                    <Button onClick={() => setIsConfirmDeleteTransaction(false)}>
                        No
                    </Button>
                    <Button color="primary" onClick={deleteTransactionCover}>
                        Yes
                    </Button>
                </ButtonContainer>
            </Modal>
        </div>
    )
}

export default connect(null, { deleteTransaction })(withRouter(TransactionDetail))