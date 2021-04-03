import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getAll as getAllOrders } from '../../actions/orderActions';

import ViewButton from './ViewButton';
import MainLayout from '../layouts/MainLayout';
import './UserOrders.scss';

const UserOrders = ({ user, orders, getAllOrders }) => {
    useEffect(() => {
        if(user) {
            getAllOrders(user.idToken);
        }
        
    }, [getAllOrders]);

    return (
        <MainLayout>
            <section className="user-orders-wrapper">
                <h1 className="user-orders-title">My Orders</h1>

                <table className="orders-list">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Num of Items</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders
                                .map((order) =>
                                    (
                                        <tr>
                                            <td width="40%">{order._id}</td>
                                            <td width="30%">{order.qtty}</td>
                                            <td width="10%">{`$${(order.totalPrice + order.tax).toFixed(2)}`}</td>
                                            <td width="10%" 
                                            className={order.status === 'Processing' ? 'proc-status' : 'dev-status'}
                                            >{order.status}</td>
                                            <td width="10%">
                                                <ViewButton orderId={order._id}/>
                                            </td>
                                        </tr>
                                    )
                                )
                        }
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Order ID</th>
                            <th>Num of Items</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </tfoot>
                </table>
            </section>
        </MainLayout>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    orders: state.orders.orders
});

const mapDispatchToProps = {
    getAllOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);