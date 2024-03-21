
const User = ({user}) => {
    const {product_name, price, image, description} = user;
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl border-x-2 border-[#8A50FF] p-2">
                <figure><img className="h-52 w-60 rounded-xl"
                    src={image}
                    alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {product_name}</h2>
                    <p className="font-medium">Price: {price}</p>
                    <p className="text-[#39293C] font-bold">Disease: {description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;