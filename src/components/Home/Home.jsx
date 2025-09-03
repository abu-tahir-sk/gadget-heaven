import { useNavigation } from "react-router-dom";
import Banner from "../Banner/Banner";
import BannerImg from "../BannerImg/BannerImg";
import Gadgetes from "../Gadgetes/Gadgetes";

import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

const Home = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);
  return (
    <div>
      <Banner></Banner>
      <BannerImg></BannerImg>
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner aria-label="Loading..." size="xl" />
        </div>
      ) : (
        <Gadgetes></Gadgetes>
      )}
    </div>
  );
};

export default Home;
