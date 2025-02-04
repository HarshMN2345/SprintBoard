import { Priority } from "@/app/state/api";
import ReusablePriorityPage from "../reusablePriorityPage/page";

const Urgent = () => {
    return <ReusablePriorityPage priority={Priority.Low} />;
  };
  
  export default Urgent;