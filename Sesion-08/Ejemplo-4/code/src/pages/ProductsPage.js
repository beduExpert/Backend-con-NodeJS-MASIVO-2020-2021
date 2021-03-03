import React, { useEffect, useState } from 'react';

const ProductsPage = () => {
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(process.env.REACT_APP_BACKEND_API + '/api/products', {
        method: 'GET',
        headers: {
          'Authorization': window.localStorage.getItem('token'),
        },
      });
      const body = await response.json();
      if (!response.ok) { 
        setError(body.message);
      } else {
        setProducts(body.data.rows);
      }
    }
    fetchData();
  }, []);
  return <>
    <section className="py-10">
      <div className="container mx-auto max-w-screen-lg">
        <div className="pb-3 border-b border-gray-200 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0 mb-4">
          <h3 className="text-2xl leading-6 font-medium text-gray-900">
            Products
          </h3>
          <div className="flex space-x-3">
            <span className="shadow-sm rounded-md">
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:shadow-outline-purple focus:border-purple-700 active:bg-purple-700 transition duration-150 ease-in-out">
                Create
              </button>
            </span>
          </div>
        </div>
        { error
          ? <>
            <span className="inline-block w-full px-3 py-2 rounded bg-red-500 text-white mb-2">
              {error}
            </span>
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-64 mb-4"></div>
          </>
          : <div className="flex flex-col mb-8">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 bg-gray-50"></th>
                      </tr>
                    </thead>
                    <tbody>
                      { products.length > 0 ?
                        products.map((product, index) => <tr key={index} className="bg-white">
                          <td className="px-6 py-4 whitespace-no-wrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-lg" src={product.image} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">
                                  {product.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                            {product.description}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap leading-5 text-black">
                            {new Intl.NumberFormat('es-MX', {
                              style: 'currency',
                              currency: 'MXN'
                            }).format(product.price)}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                          </td>
                        </tr>)
                      : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  </>;
}

export default ProductsPage;