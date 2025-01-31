import { FaArrowLeft, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import cox from './../../assets/images/Coxbazar.png'
import sree from './../../assets/images/Sreemongol.png'
import sajek from './../../assets/images/Sajek.png'
import sundor from './../../assets/images/sundorbon.png'
import { Link } from "react-router";

const Carousel = () => {
    const images = [
        [cox, "COX'S BAZAR"],
        [sree, 'SREEMANGAL'],
        [sundor, 'SUNDORBAN'],
        [sajek, 'SAJEK'],
    ]

   
   
    return (
        <div className="lg:grid grid-cols-5 ">
            <div className="col-span-2 space-y-3">
                <h2 className="text-8xl font-bebasNeue">Cox&apos;s bazar</h2>
                <p>Cox&apos;s Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                <Link to={'/booking'} className="btn btn-warning">Booking <FaArrowRightLong /></Link>
            </div>
            <div className="col-span-3 mt-5 lg:mt-0 relative">
                <div className="flex gap-5 overflow-hidden">
                    {
                        images.map((i, idx) =>
                            <div key={idx} style={{ 'backgroundImage': `url(${i[0]})` }} className="shrink-0 h-[60vh] w-[40vh] rounded-xl bg-center bg-cover ">
                                <div className="bg-linear-to-t from-black to-transparent h-full content-end p-5 text-4xl font-bebasNeue rounded-xl"><p>{i[1]}</p> </div>
                            </div>
                        )
                    }
                    {/* <div style={{ 'background-image': `url(${sree})` }} className="shrink-0 h-[60vh] w-[40vh] rounded-xl bg-center bg-cover ">
                        <div className="bg-linear-to-t from-black to-transparent h-full content-end p-5 text-4xl rounded-xl"><p>Cox bazar </p> </div>
                    </div>
                    <div style={{ 'background-image': `url(${sajek})` }} className="shrink-0 h-[60vh] w-[40vh] rounded-xl bg-center bg-cover ">
                        <div className="bg-linear-to-t from-black to-transparent h-full content-end p-5 text-4xl rounded-xl"><p>Cox bazar </p> </div>
                    </div>
                    <div style={{ 'background-image': `url(${sundor})` }} className="shrink-0 h-[60vh] w-[40vh] rounded-xl bg-center bg-cover ">
                        <div className="bg-linear-to-t from-black to-transparent h-full content-end p-5 text-4xl rounded-xl"><p>Cox bazar </p> </div>
                    </div> */}
                </div>
                <div className="absolute mt-8 space-x-3 z-10">
                    <button className="rounded-full p-2 bg-white"><FaArrowLeft className="text-black" /></button>
                    <button className="rounded-full p-2 bg-white"><FaArrowRight className="text-black" /></button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;