import React from 'react'
import { useState } from 'react'

function Form({ visible }) {
  const [open, setOpen] = useState(true);
  const formVisible = visible ? "visible" : "hidden";
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const onSubmit = () => {
    const values = {
      title, status, name, file
    }
    //save value to state
    // hit create api (backend)
    // what to do (message, Saved successfully || redirect to dashboard)
    console.log(values)
  }
  return (
    <div>
      
      <div className={`float flex md:${formVisible}`}>
        <div className='p-4  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg border-white border-2 rounded-lg '>
          <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            onClick={''}>
          </button>
          <div className='text- black text-2xl p-3'>Tournament Details</div>

          <div >
            <div class=" relative p-2">
              <label for="required-email" class="text-gray-700" >
                Tournament Title
              </label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} id="required-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-50 focus:border-transparent" name="ttile" placeholder="Tournament Title" />
            </div>
            <div class=" relative p-2">
              <label for="Status" class="text-gray-700">
                Status
              </label>
              <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-50 focus:border-transparent" name="Status" placeholder="Tournament Status" />
            </div>
            <div class=" relative p-2 ">
              <label for="name-with-label" class="text-gray-700">
                Game Name
              </label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name-with-label" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-50 focus:border-transparent" name="game" placeholder="Game" />
            </div>
            <label for="name-with-label" class="text-gray-700">
              Game Picture
            </label>
            <input onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))} class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-yellow-50 focus:border-transparent" id="file_input" type="file">
            </input>
            <img src={file} />
            <div className='p-4'>
              <button onClick={() => onSubmit()} type="button" class="p-3  bg-gradient-to-r from-red-300 to-amber-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md ocus:outline-none focus:ring-2 " id='close'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className=' pl-72 flex fixed '>
          {
            title
          }
        </div>
      </div>

    </div>
  )
}

export default Form
