import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nftsMarketPosts } from '../../store/actions/NftMarketActions/nftmarketActions';

function AppliedFilters({appliedFilters,setAppliedFilters,setData}) {

  const state = useSelector((state) => state.nftsMarketPost);
  const { loading, error, nftsData } = state;

  const dispatch = useDispatch();

  let clear_all = () => {
    dispatch(nftsMarketPosts());
    setData(nftsData);
    setAppliedFilters([]);
  }
  console.log(appliedFilters)
  return (
    <div className='d-flex'>
        {appliedFilters && (
          <>
            {appliedFilters?.map((filterName, index) => <button key={index} className="btn appliedFilterBtn border">{filterName}</button>)}
          </>
          )
        }
       {!appliedFilters?.length > 0 ? null : <button className='clearAllFiltersBtn' onClick={()=>clear_all()}>Clear All</button> }
        {/* {appliedFilters !== [] && (<div onClick={()=>setAppliedFilters([])}>Clear All</div>)} */}
    </div>
  )
}

export default AppliedFilters