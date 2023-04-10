import React from 'react';

const ConnectWalletModal = () => {
  return (
    <>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            {/* <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Connect Wallet</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> */}
            <div class="modal-body">
                <div className='border connect-card rounded-3 my-2 p-3 py-2 text-center bg-light'>
                    <img width={35} src='https://staking.seedify.fund/static/media/metamask.83c2276c.png'/>
                    <h5 className='fw-bold font-family mt-2'>MetaMask</h5>
                    <p className='p-0 m-0 fs-sm-2'>Connect to your metamask</p>
                </div>
                <div className='border connect-card rounded-3 my-2 p-3 py-2 text-center bg-light'>
                    <img width={35} src='https://uigaint.com/demo/html/gmfi/assets/images/icons/coinbase.png'/>
                    <h5 className='fw-bold font-family mt-2'> Coinbase</h5>
                    <p className='p-0 m-0 fs-sm-2'>Connect to your metamask</p>
                </div>
                <div className='border connect-card rounded-3 my-2 p-3 py-2 text-center bg-light'>
                    <img width={35} src='https://uigaint.com/demo/html/gmfi/assets/images/icons/wallet.png'/>
                    <h5 className='fw-bold font-family mt-2'>WalletConnect</h5>
                    <p className='p-0 m-0 fs-sm-2'>Connect to your metamask</p>
                </div>
                <div className='border connect-card rounded-3 my-2 p-3 py-2 text-center bg-light'>
                    <img width={35} src='https://uigaint.com/demo/html/gmfi/assets/images/icons/trust.png'/>
                    <h5 className='fw-bold font-family mt-2'> Trust Wallet</h5>
                    <p className='p-0 m-0 fs-sm-2'>Connect to your metamask</p>
                </div>
            </div>
            {/* <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div> */}
            </div>
        </div>
        </div>
    </>
  );
}

export default ConnectWalletModal;
