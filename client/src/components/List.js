import React from 'react';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import { default as api} from '../store/apiSlice';


/*
const obj = [
    {
        name: "Savings",
        color: '#f9c74f',
    },
    {
        name: "Investment",
        color: '#f9c74f',
    },
    {
        name: "Expense",
        color: 'rgb(54,162,235)',
    }
];
*/


export default function List() {

    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();

    const [ deleteTransaction ] = api.useDeleteTransactionMutation();

    let Transactions;
     
    // Handler function
    const handlerClick = (e) => {
        // console.log(e.target);
        if(!e.target.dataset.id) {
            return 0;
        }
        // console.log(e.target.dataset.id);
        deleteTransaction({ _id: e.target.dataset.id });
    };


    if(isFetching) {
        Transactions = <div>Fetching</div>;
    } else if(isSuccess) {
        Transactions = data.map((v, i) => (<Transaction key={i} category={v} handler={handlerClick}></Transaction>));
    } else if(isError) {
        Transactions = <div>Error</div>;
    }


    return (
        <div className="flex flex-col py-6 gap-3">
            <h1 className="py-4 font-bold text-xl">History</h1>
            {Transactions}
        </div>
    );

}


// Transaction Component
function Transaction({ category, handler }) {
    if (!category) {
        return null;
    }

    return (
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}>
            <button className="px-3" onClick={handler}><box-icon data-id={category._id ?? ""} name="trash" color={category.color ?? "#e5e5e5"} size="15px"></box-icon></button>
            <span className="block w-full">{category.name ?? ""}</span>
        </div>
    );
}

