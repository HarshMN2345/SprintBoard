import { Priority } from "@/app/state/api";
import ReusablePriorityPage from "../reusablePriorityPage/page";

const Urgent = () => {
    return <ReusablePriorityPage priority={Priority.High} />;
  };
  
  export default Urgent;