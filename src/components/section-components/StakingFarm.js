import React from 'react';
import img from '../../assets/img/img1.jpg';
import { Link } from 'react-router-dom';


const StakingFarm = (props) => {
  return (
    <>
        <div class="nft-card stake-tab p-4 my-3">
            
            <div className='d-flex align-items-center'>
                <div className=''>   
                    <h5 class="card-title text-white font-family ">Select a Network</h5>
                </div>
                <div className=' text-end d-flex align-items-center'>   
                    <div className='section-logo p-2 ms-4'>
                        <img widyh={35} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzY0MzA4NDIyODMxMTFFQzk0MThFRDFCMjVGQUJFQzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzY0MzA4NDMyODMxMTFFQzk0MThFRDFCMjVGQUJFQzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjQzMDg0MDI4MzExMUVDOTQxOEVEMUIyNUZBQkVDMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjQzMDg0MTI4MzExMUVDOTQxOEVEMUIyNUZBQkVDMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj//Vi4AAAuhSURBVHja7FoNjB1V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'/>
                    </div>
                    <div className='section-logo p-2 ms-4'>
                        <img widyh={35} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEQ2MjczOTUyODMxMTFFQ0JGQzRFNjdGNzc1QTcyMTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEQ2MjczOTYyODMxMTFFQ0JGQzRFNjdGNzc1QTcyMTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RDYyNzM5MzI4MzExMUVDQkZDNEU2N0Y3NzVBNzIxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RDYyNzM5NDI4MzExMUVDQkZDNEU2N0Y3NzVBNzIxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpSetK0AAAl2SURBVHja7Fpfq11H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'/>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <div className='w-50 my-3 text-white d-flex align-items-center'>
                    <h4 className='w-50'>Pool details</h4>
                </div>
                <div className='w-50  text-white text-end'>
                    <h5 className='ms-4 theme-color'>SFUNDS <span className='text-white'>earned</span></h5>
                    <span className=' badge bg-success'>HARVEST</span>
                </div>
            </div>
            <div className='border-bottom  py-2 d-flex align-items-center border-secondary text-white'>
                <h6 className='p-0 m-0 w-50'>API</h6>
                <p className='text-end p-0 m-0 w-50'>31.95 %</p>
            </div>
            <div className='border-bottom  py-2 d-flex align-items-center border-secondary text-white'>
                <h6 className='p-0 m-0 w-50'>REWARD PER MINUTE</h6>
                <p className='text-end p-0 m-0 w-50'>4.62963 SFUND</p>
            </div>
            <div className='border-bottom  py-2 d-flex align-items-center border-secondary text-white'>
                <h6 className='p-0 m-0 w-50'>UNLOCKS IN</h6>
                <p className='text-end p-0 m-0 w-50'>7 DAYS</p>
            </div>
            <div className='border-bottom  py-2 d-flex align-items-center border-secondary text-white'>
                <h6 className='p-0 m-0 w-50'>YOUR STAKE</h6>
                <p className='text-end p-0 m-0 w-50'>-</p>
            </div>
            <div className='border-bottom  py-2 d-flex align-items-center border-secondary text-white'>
                <h6 className='p-0 m-0 w-50'>POOL SHARE</h6>
                <p className='text-end p-0 m-0 w-50'>-</p>
            </div>
            <div className='border-bottom  py-2 d-flex align-items-center border-secondary text-white'>
                <h6 className='p-0 m-0 w-50'>PARTICIPANTS</h6>
                <p className='text-end p-0 m-0 w-50'>1218</p>
            </div>
            <div className='border-bottom  py-2 d-flex align-items-center border-secondary text-white'>
                <h6 className='p-0 m-0 w-50'>DISTRIBUTED TOKENS</h6>
                <p className='text-end p-0 m-0 w-50'>178,343.519 / 400,000</p>
            </div>
            <div className='mt-4'>
                <div class="progress" style={{height: '5px'}}>
                    <div class="progress-bar bg-warning" role="progressbar" style={{width : '80%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className='w-100 text-end mt-2'>
                    <h6 className='text-white p-0 m-0'>Listing Time</h6>
                    <h6 className='text-warning mt-2 p-0 m-0'>80% Completed</h6>
                </div>
            </div>
            <div className='text-start'>
                <button className='btn py-3 mt-4  font-family staking-btn'>View Pool</button>
                <button className='btn py-3 mt-4  font-family staking-btn'>Approve</button>
            </div>
            <h6 className='theme-color mt-2'>Balance : 0 Cake-LP</h6>
        </div>
    </>
  );
}

export default StakingFarm;
