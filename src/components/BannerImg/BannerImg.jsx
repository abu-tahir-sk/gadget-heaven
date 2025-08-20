import banner from '../../assets/banner.jpg';

const BannerImg = () => {
  return (
   
      <div className="sm:hidden md:flex border-8 border-sky-100 w-8/12 mx-auto mb-20 relative rounded-lg -mt-24 z-10 md:h-80">
        <img className='w-full' src={banner} alt="" />
      </div>
  
  );
};

export default BannerImg;
