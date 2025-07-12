import Searchbar from "@/HomePage/Searchbar";
import Banner from "@/HomePage/Searchbar";
import Image from "next/image";
import FeaturedCollege from "./FeaturedCollege/page";
import GraduationGalary from "./GraduationGalary/page";
import ResearchPaper from "./ResearchPaper/page";
import StudentsFeedbacks from "./StudentsFeedbacks/page";

export default function Home() {
  return (
      <div className="">
               <Searchbar></Searchbar>
               <FeaturedCollege></FeaturedCollege>
               <GraduationGalary></GraduationGalary>
               <ResearchPaper></ResearchPaper>
               <StudentsFeedbacks></StudentsFeedbacks>
        </div>
  );
}
