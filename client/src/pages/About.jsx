import './../../src/index.css'
export default function About() {
  return (
    // <div classNameName='py-20 px-4 max-w-6xl mx-auto'>
    //   <h1 classNameName='text-3xl font-bold mb-4 gradient-bg'>About Urban Estate</h1>
    //   <p classNameName='mb-4 text-slate-800'>Urban Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
    //   <p classNameName='mb-4 text-slate-800'>
    //   Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
    //   </p>
    //   <p classNameName='mb-4 text-slate-800'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
    // </div>

    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold mb-8 text-center gradient-bg">About Urban Estate</h2>

      <div className="bg-gray-100 p-6 rounded-md shadow-md mb-8">
        <p className="text-lg text-gray-700 leading-7 mb-4">
          Urban Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
        </p>

        <p className="text-lg text-gray-700 leading-7 mb-4">
          Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
        </p>

        <p className="text-lg text-gray-700 leading-7 mb-4">
          Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
        </p>
      </div>

      <div className='w-[200px] h-[200px] flex items-center justify-between mx-[575px] my-[-50px]'>
        <a href="/" className="block text-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">Know More</a>
      </div>
    </div>
  )
}
