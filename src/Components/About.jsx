
const About = () => {
    return (
        <div className="text-center space-y-5 mt-10">
            <h1 className="text-2xl lg:text-5xl font-medium">We champion entrepreneurs <br /> by delivering the perfect help <br /> and tools for their journey.</h1>
            <p className="p-5">GoDaddy is the place folks come to name their idea, <br /> create a compelling brand and a great looking website, <br /> attract customers with digital and social marketing, <br /> and manage their work. Where no tool alone will do, <br /> we give direct one-on-one guidance with a human connection.</p>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/R4vMbv3/433960710-1140193247137393-8214900727083438661-n.png"
                        className="w-[600px] h-[500px] mx-auto"/>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/jhB8Bgv/433204557-779272177067677-1191341011757980891-n.png"
                        className="w-[600px] h-[500px] mx-auto"/>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co/j3TGbNV/430829682-1123545108672177-2368154710408169125-n.png"
                        className="w-[600px] h-[500px] mx-auto"/>
                    <div
                        className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;