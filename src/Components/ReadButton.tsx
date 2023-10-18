import { rightArrow } from "../Constants/Data"

const ReadButton = () => {
  return (
    <div className=" flex gap-5 w-fit py-1">
      <img className="w-5" src={rightArrow} alt="Right Arrow" />
      <span className="font-bold text-sm text-white ">Read more</span>
    </div>
  )
}

export default ReadButton