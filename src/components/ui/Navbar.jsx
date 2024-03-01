import companyLogo from "../../assets/dashboard/company.svg";
import searchLogo from "../../assets/dashboard/search.svg";
import universityLogo from "../../assets/dashboard/university.svg";
import notificationLogo from "../../assets/dashboard/notification.svg";

const Navbar = () => {
  return (
    <nav className="flex w-100 justify-between items-center p-5">
      <div className="flex gap-10 items-center ">
        <div className="flex justify-center items-center gap-5">
          <img src={companyLogo} alt="logo" width={44} height={44} />
          <div>
            <h1 className="text-3xl font-bold text-[#000000CC]">Rearticle</h1>
            <p className="text-[#00000080] text-[10px]">
              The Research Companion
            </p>
          </div>
        </div>
        <div className="flex items-center bg-neutral-100 rounded-lg py-3 px-4 gap-x-4">
          <img src={searchLogo} alt="search" width={24} height={24} />
          <input
            type="text"
            placeholder="Search Paper"
            className="bg-transparent w-[45vw] focus:outline-none"
          />
        </div>
      </div>
      <div className="flex gap-10">
        <img src={universityLogo} alt="university" width={128} height={33} />
        <div className="flex">
          <p className="absolute flex justify-center items-center text-center bg-red-500 px-[5px] py-0 text-[12px] text-white z-10 ml-2 mt-1 rounded-full">
            5
          </p>
          <img
            src={notificationLogo}
            alt="notification"
            height={20}
            width={20}
            className="relative"
          />
        </div>
        <div className="flex gap-3 justify-center items-center">
          <p className="text-[16px] font-semibold text-gray-400">Sai Ganesh</p>
          <div className="bg-[#3464AF] rounded-full  flex justify-center text-white text-[16px] h-10 w-10 items-center">
            S
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
