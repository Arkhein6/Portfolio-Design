import { ImageCard, ReadButton } from "."
import { projectProps } from "../Constants/types"

const ProjectCard = ({
  title,
  subTitle,
  description,
  imageOrientation,
  imageSource
}: projectProps) => {
  console.log(imageOrientation)
  return (
    <div className=" w-full flex-col gap-5 sm:gap-0 mb-5 sm:flex-row flex justify-between">
      <div className={` flex flex-col sm:w-[50%] max-w-[700px] gap-2 sm:gap-5 ${imageOrientation === "left" ? " sm:order-1" : ""}` } >
        <h2 className="text-[#64A0B8] text-2xl">{title}</h2>
        <h3 className="text-white font-bold text-3xl">{subTitle}</h3>
        <p className="text-[#686A7E]" >{description}</p>
        <ReadButton />
      </div>
      <ImageCard imageSource={imageSource} />
    </div>
  )
}

export default ProjectCard


















