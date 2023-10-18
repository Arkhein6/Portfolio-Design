import { serviceProps } from "../Constants/types"

const ServiceCard = ({title,iconSvg,description}: serviceProps) => {
  return (
    <div className="min-w-[300px] max-w-[400px] p-4  rounded-lg border-[6px] border-[#52B6D8] text-[#64A0B8] flex flex-col gap-2 ">
      <div className="flex items-center gap-3 ">
        <div className="w-12 h-12 flex items-center justify-center sm:w-16 sm:h-16 bg-white rounded-[50%] p-1 sm:p-2">
          <img src={iconSvg} alt="React Icon" />
        </div>
        <h2 className="text-white font-extrabold leading-[1] text-xl sm:text-3xl">{title}</h2>
      </div>
        <p className="text-gray text-sm text-[#686A7E]">{description}</p>
      

    </div>
  )
}

export default ServiceCard