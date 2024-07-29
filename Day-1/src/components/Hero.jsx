function Hero() {
    return (
        <div className="hero_container">
            <div className="hero_content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                    OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
                    YOU WITH OUR SHOES.
                </p>
                <div className="hero_btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="hero_shopping">
                    <p>Also Available on</p>
                    <div className="shopping_icon">
                        <img src="/src/assets/amazon.png" alt="" />
                        <img src="/src/assets/flipkart.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="hero_img">
                <img src="/src/assets/shoe_image.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;
