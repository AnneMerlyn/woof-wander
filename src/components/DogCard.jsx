const DogCard = () => {
    return (
        <div className="card bg-slate-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src="https://images.dog.ceo/breeds/terrier-dandie/n02096437_1605.jpg"
                    alt="Judging Dog"
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Judgy Dog!</h2>
                <p>Why you looking at me?</p>
                <div className="card-actions">
                    {/* button here */}
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default DogCard;
