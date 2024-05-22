import React from 'react';

const Header = () => {
  return (
    <div className="flex sticky top-0 z-50 justify-between items-center p-[12px] bg-[#2c2c2c]">
        <img className='w-[10rem]' src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg" alt="" />
      <button className="bg-green-500 text-white py-[5px] px-5 rounded">Buy now</button>
    </div>
  );
};

export default Header;
