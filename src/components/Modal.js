import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="pl-20 flex pt-40 fixed">
      <>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Form
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Form
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-red-50 focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className='p-4  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg border-white border-2 rounded-lg '>
                      <button className="absolute bg-orange-400 text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-red-50 focus:outline-none"
                        onClick={''}>
                      </button>
                      <div className='text- black text-2xl p-3'>Tournament Details</div>

                      <div >
                        <div class=" relative p-2">
                          <label for="required-email" class="text-gray-700" >
                            Tournament Title
                          </label>
                          <input type="text" id="required-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-50 focus:border-transparent" name="ttile" placeholder="Tournament Title" />
                        </div>
                        <div class=" relative p-2">
                          <label for="Status" class="text-gray-700">
                            Status
                          </label>
                          <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-50 focus:border-transparent" name="Status" placeholder="Tournament Status" />
                        </div>
                        <div class=" relative p-2 ">
                          <label for="name-with-label" class="text-gray-700">
                            Game Name
                          </label>
                          <input type="text" id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-50 focus:border-transparent" name="game" placeholder="Game" />
                        </div>
                        <label for="name-with-label" class="text-gray-700">
                          Game Picture
                        </label>
                        <input class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-50 focus:border-transparent" id="file_input" type="file">
                        </input>

                        <div className='p-4'>
                          <button type="button" class="p-3  bg-gradient-to-r from-red-300 to-amber-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md ocus:outline-none focus:ring-2 " id='close'
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    </div >
  );
}