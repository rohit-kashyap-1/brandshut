import React from 'react'

export default function Filters() {
  return (
    <div className='filters'>
        <div className='p-3 rounded border'>
            <div className='filter-item mb-3'>
                <h5>Brands</h5>
                <ul className='list-style-none'>
                    <li><label><input type='checkbox' name='' value={''} /> Addidas </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Puma </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Polo Acc </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Zara </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Rhea Smarth </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Brooks Brothers </label></li>
                </ul>
            </div>
            <div className='filter-item mb-3'>
                <h5>Color</h5>
                <ul className='list-style-none'>
                    <li><label><input type='checkbox' name='' value={''} /> Red </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Maroon </label></li>
                    <li><label><input type='checkbox' name='' value={''} /> Green </label></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
