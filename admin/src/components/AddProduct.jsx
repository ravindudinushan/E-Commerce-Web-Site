import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <div>
        <h4 className='bold-18 pb-2'>Product title:</h4>
        <input type="text" name='name' placeholder='Type here..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md'/>
      </div>
      <div>
        <h4 className='bold-18 pb-2'>Price:</h4>
        <input type="text" name='old_price' placeholder='Type here..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md'/>
      </div>
      <div>
        <h4 className='bold-18 pb-2'>Product title:</h4>
        <input type="text" name='new_price' placeholder='Type here..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md'/>
      </div>
      <div>
        <h4 className='bold-18 pb-2'>Product Category:</h4>
        <select name="category" id="" className='bg-primary'>
            <option value="Women"></option>
            <option value="Men"></option>
            <option value="Kid"></option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
            <img src="" alt="" />
        </label>
      </div>
    </div>
  )
}

export default AddProduct
