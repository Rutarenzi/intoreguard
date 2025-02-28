

const Track=()=>{
    return(
      <>
        <div className="min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-full  max-w-5xl text-white">
            <div className="text-center mt-32">
              <input 
              type="text"
              placeholder="Enter Incidency Id"
              className="w-[50%] p-2 rounded-full bg-white/20 text-center"
              />
              <button className="bg-white p-1 rounded-lg text-black">Check</button>
            </div>
          </div>
        </div>
          <div className="text-white text-center mt-10">
          {/* table ptt */}
          <div className="px-6 py-4 mx-auto w-[50%]">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="py-3 px-4 text-sm font-medium text-gray-500 w-1/4">Report ID</td>
              <td className="py-3 px-4 text-sm text-gray-900 text-white">12343453</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-sm font-medium text-gray-500">Created Date</td>
              <td className="py-3 px-4 text-sm text-gray-900 text-white">12/09/2023</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-sm font-medium text-gray-500">Title</td>
              <td className="py-3 px-4 text-sm text-gray-900 font-medium text-white">wHAT</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-sm font-medium text-gray-500">Location</td>
              <td className="py-3 px-4 text-sm text-gray-900 text-white">KIGALI</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-sm font-medium text-gray-500 align-top">Description</td>
              <td className="py-3 px-4 text-sm text-gray-900 whitespace-pre- text-white">
                THIS THE best website you can test so far
                THIS THE best website you can test so far
                THIS THE best website you can test so far
                THIS THE best website you can test so far
                THIS THE best website you can test so far
              </td>
            </tr>
          </tbody>
        </table>
           </div>
          </div>
      </div> 
      
     </>
    )
}

export default Track;