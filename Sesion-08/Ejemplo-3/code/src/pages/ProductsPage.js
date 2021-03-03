import React from 'react';

const ProductsPage = () => {
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
        <div className="flex flex-col mb-8">
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
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1527443195645-1133f7f28990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-gray-900">
                            iMac 2020
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">Regional Paradigm Technician</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      $4,400.00
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default ProductsPage;