import Banner from "../../sheard/Banner";
import bannerBg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../../sheard/MenuItem";
import Button from "../../components/Button";
import { Link } from "react-router";
import Cover from "../../sheard/Cover";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import Loading from "../../components/Loading";

const OurMenu = () => {
  const [offered] = useMenu("offered");
  const [dessert] = useMenu("dessert");
  const [salad] = useMenu("salad");
  const [soups] = useMenu("soup");

  if(!offered || !dessert || !salad || !soups){
    return <Loading></Loading>
  }


  return (
    <div>
      <Banner
        heading="OUR MENU"
        paragraph="Would you like to try a dish?"
        backgroundImg={bannerBg}
      ></Banner>
      {/* section title  */}
      <div className="mt-20">
        <SectionTitle
          subTitle="---Don't miss---"
          mainTitle="TODAY'S OFFER"
        ></SectionTitle>
        {/* offered  */}
        <div className="grid grid-cols-1 gap-5 py-10 lg:grid-cols-2 lg:px-28 px-5">
          {offered?.map((item) => (
            <MenuItem key={item?._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={"/our-shop/offered"} className="text-center pt5">
          <Button buttonText={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </Link>
      </div>
      {/* desserts  */}
      <div className="mt-20">
        <Cover
          heading={"DESSERTS"}
          backgroundImg={dessertImg}
          paragraph={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <div className="grid grid-cols-1 gap-5 pt-10 lg:grid-cols-2 lg:px-28 px-5">
          {dessert?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={"/our-shop/dessert"} className="text-center pt5">
          <Button buttonText={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </Link>
      </div>
      {/* salad  */}
      <div className="mt-20">
        <Cover
          heading={"SALAD"}
          backgroundImg={saladImg}
          paragraph={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <div className="grid grid-cols-1 gap-5 pt-10 lg:grid-cols-2 lg:px-28 px-5">
          {salad?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={"/our-shop/salad"} className="text-center pt5">
          <Button buttonText={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </Link>
      </div>
      {/* soup  */}
      <div className="my-20">
        <Cover
          heading={"SOUPS"}
          backgroundImg={soupImg}
          paragraph={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        <div className="grid grid-cols-1 gap-5 pt-10 lg:grid-cols-2 lg:px-28 px-5">
          {soups?.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={"/our-shop/soup"} className="text-center pt5">
          <Button buttonText={"ORDER YOUR FAVOURITE FOOD"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default OurMenu;
