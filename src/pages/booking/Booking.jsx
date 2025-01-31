
const Booking = () => {
    const handleSubmit = e => {
        e.preventDefault()

    }
    return (
        <div className="flex flex-col gap-16 items-center lg:flex-row">
            <div className="text-center lg:text-left">
                <h2 className="text-6xl lg:text-8xl font-bebasNeue">Cox&apos;s bazar</h2>
                <p className="text-sm md:text-base">Cox&apos;s Bazar is a town on the southeast coast of Bangladesh. It&apos;s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
            <div className=" bg-white max-w-sm rounded-2xl shadow-2xl">
                <div className="p-3 md:p-8">
                    <form onSubmit={handleSubmit} className="fieldset text-black">
                        <label className="text-black">Origin</label>
                        <input type="text" name="origin" className="input bg-slate-200 placeholder:font-bold font-bold" placeholder="Dhaka" />
                        <label className="text-black">Destination</label>
                        <input type="text" className="input bg-slate-200 placeholder:font-bold font-bold" placeholder="Cox&apos;s bazar" />
                        <div className="flex gap-3 ">
                            <div>
                                <label className="text-black">From</label>
                                <input type="date" name="from" className="block p-2 border-none rounded-sm bg-slate-200  font-bold" />
                            </div>
                            <div>
                                <label className="text-black">To</label>
                                <input type="date" name="to" className="block p-2 border-none rounded-sm bg-slate-200 font-bold" />
                            </div>
                        </div>
                        <button className="btn btn-neutral mt-4">Start Booking</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;