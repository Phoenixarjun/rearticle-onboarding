import Incognito from "/Incognito.png";
import Joker from "/Joker PFP.jpg";

const AllProjectsPage = () => {
  return (
    <div className="flex gap-x-8 items-center h-full justify-center w-full">
      <img src={Incognito} alt="" className="h-60" />
      <img src={Joker} alt="" className="h-60" />
    </div>
  );
};

export default AllProjectsPage;
