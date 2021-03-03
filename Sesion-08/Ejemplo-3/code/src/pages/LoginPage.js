import React from 'react';

const LoginPage = () => {
  return <>
    <section className="py-20" style={{
      backgroundImage: 'url(https://res.cloudinary.com/print-bear/image/fetch/c_fill,f_auto,fl_lossy,q_auto:best/https://images.ctfassets.net/rw1l6cgr235r/4hEMrzk55KaEWAIEeAocEm/725d3fa4580fdb5d16c3ae8ed8bf72a2/logo-stickers-thumbnail-4651.jpg)',
      backgroundSize: 'cover',
    }}>
      <div className="container mx-auto max-w-screen-lg">
        <div className="py-20 grid grid-cols-8">
          <div className="col-span-3">
            <form className="bg-gray-100 rounded p-6">
              <h2 className="text-2xl mb-8 text-center text-opacity-75 font-bold">Welcome to Bedu Swag</h2>
              <div className="flex flex-col mb-4">
                <label className="font-semibold mb-1">Email Address</label>
                <input className="py-2 px-4 bg-white rounded border-2 border-gray-600" type="text" name="email" placeholder="Email Address" />
              </div>
              <div className="flex flex-col mb-6">
                <label className="font-semibold mb-1">Password</label>
                <input className="py-2 px-4 bg-white rounded border-2 border-gray-600" type="password" name="password" placeholder="" />
              </div>
              <div className="flex">
                <button className="px-2 py-4 inline-flex text-white rounded w-full justify-center bg-purple-600">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  </>;
}

export default LoginPage;