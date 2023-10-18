import { imageProps } from "../Constants/types";

const ImageCard = ({
	imageSource,
	isDeveloper,
}: imageProps) => {
	return (
		<div
			className={`min-w-[300px]  max-w-[400px]   relative border-8 rounded-lg mt-3 ${isDeveloper ? "ml-0 sm:ml-3" : "-ml-3 sm:mr-3"} border-[#52B6D8]`}
		>
			<img
				className={`${
					isDeveloper
						? "min-h-[350px] max-h-[450px]"
						: "min-h-[300px] max-h-[400px]"
				}  object-cover rounded-lg relative bottom-6 ${
					isDeveloper ? "right-6" : "left-6"
				}`}
				src={imageSource}
				alt=""
			/>
		</div>
	);
};

export default ImageCard;
