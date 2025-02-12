import React from 'react'
import ListItem from './ListItem'
import Filters from './Filters'
export default function Listing() {
    return (
        <div className='bg-light'>
            <div className='container py-4'>
                <h2>Mens Innerware</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, amet fugiat. Recusandae doloribus, illo dolorum pariatur non minima illum error fugiat repudiandae dolor omnis totam mollitia assumenda? Eaque, commodi exercitationem!</p>
                <div className='listing'>
                    <Filters />
                    <div className='product-list'>
                        <ListItem price={3287} discount={10} />
                        <ListItem  price={1103} discount={12} />
                        <ListItem   price={2400} discount={14}/>
                        <ListItem  price={3200} discount={54} />
                        <ListItem   price={1450} discount={9}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
