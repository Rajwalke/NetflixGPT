/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const TiltleInfo=({title,overview})=>{
    return (
        <div className="">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="px-1 py-4 w-1/4 text-base text-start">{overview}</p>
            <div className="flex justify-start cursor-pointer">
            <p className="text-2xl py-2 px-6 rounded-md text-white font-semibold bg-slate-400 m-2">▷ Play</p>
            <p className="text-2xl py-2 px-6 rounded-md text-white font-semibold bg-slate-400 m-2"><span className="font-thin">ⓘ</span> More Info</p>
            </div>
            
        </div>
    )
}
export default TiltleInfo;