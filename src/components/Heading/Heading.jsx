const Heading = ({title, subTitle}) => {
      return (
            <div>
                 <h2 className="text-3xl font-bold text-white">{title}</h2>
                 <p className="py-6 text-white text-wrap md:px-60 lg:px-96">{subTitle}</p> 
            </div>
      );
};

export default Heading;