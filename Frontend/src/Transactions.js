import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_TRANSACTIONS = gql`
  query GetTransactions($compteId: Int!) {
    transactionsByCompteId(compteId: $compteId) {
      id
      montant
      type
      dateTransaction
    }
  }
`;


const Transactions = () => {
  
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);

  if (loading) return <p className="text-center text-gray-500">Transactions...</p>;
  if (error) return <p className="text-center text-red-500">Error : {error.message}</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Made Transactions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.transactionsByCompteId.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white shadow-xl rounded-lg p-6 border border-gray-200 transition transform hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">{transaction.type}</h3>
            <p className="text-gray-700">Amount: <span className="font-bold">{transaction.montant} €</span></p>
            <p className="text-gray-500">Transaction Date: {transaction.dateTransaction}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
