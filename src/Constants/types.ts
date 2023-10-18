type headerLinks = "HOME" | "ABOUT_ME" | "SERVICES" | "PORTFOLIO" | "CONTACT_ME" | "EXPERIENCE" 
type categoryProps = "Mobile" | "Website" | "Other"
type projectProps = {
  title: string,
  subTitle: string,
  description: string,
  imageOrientation?: "left" | "right",
  imageSource: string
}
type serviceProps = {
  title: string,
  iconSvg: string,
  description: string
}
type headerProps = {
  id: headerLinks,
  title: string,
  isButton?: boolean
}
type experienceProps = {
  icon: string,
  title: string
}
type developerProps = {
  imageSource: string,
  description: string
}
type imageProps = {
	imageSource: string;
	isDeveloper?: boolean;
}

export type {
  categoryProps,
  projectProps,
  imageProps,
  developerProps,
  serviceProps,
  experienceProps,
  headerLinks,
  headerProps
}