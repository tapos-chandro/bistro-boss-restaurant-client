import { RotatingLines } from "react-loader-spinner";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Card from "../../sheard/Card";
import Loading from "../../components/Loading";





const RecommendedItems = () => {

    const [menu] = useMenu('offered')

    if (!menu) { 
        return <Loading/>
    }

    return (
        <section className="py-20">
            <SectionTitle subTitle='Should Try' mainTitle='CHEF RECOMMENDS'></SectionTitle>
            <div className="grid gap-20 mt-16 lg:grid-cols-3 md:grid-cols-2">
                {
                    menu?.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </section>
    );
};

export default RecommendedItems;