
const MenuItem = ({item}) => {
    const {name,recipe, image,price} = item
    return (
        <div className="lg:flex lg:text-left text-center grid-cols-1 space-x-5 my-2 ">
            <div className=" flex justify-center">
            <img src={image} alt="" className="w-24 h-20" style={{borderRadius: '0 200px 200px 200px'}} />
            </div>
            <div>
                <h3 className="text-xl">{name} -------------</h3>
                <p className="text-neutral-500">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};


export default MenuItem;