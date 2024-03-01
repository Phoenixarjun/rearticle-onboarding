import downArrowIcon from "../../assets/dashboard/downArrow.svg";
import fileTransferIcon from "../../assets/dashboard/fileTransfer.svg";
import layoutIcon from "../../assets/dashboard/layout.svg";
import notificationCircleIcon from "../../assets/dashboard/notificationCircle.svg";
import upDownArrowIcon from "../../assets/dashboard/upDownArrow.svg";
import data from "./data.json";
import PaperDetails from "./PaperDetails";

const dashboardContent = () => {
  return (
    <div className="flex flex-col p-10 pr-0 bg-gray-100 rounded-tl-2xl w-full">
      <div className="flex items-center pb-5 pr-10 justify-between">
        <div className="flex flex-col">
          <h1 className="text-[#000000BF] text-2xl font-bold mb-5">
            Your Paper
          </h1>
          <div className="flex gap-4">
            <button className="flex items-center gap-3 px-4 py-2 text-[12px] font-bold bg-white text-gray-500 border border-gray-300 rounded-full">
              Catagory
              <img src={downArrowIcon} alt="downArrow" width={15} height={15} />
            </button>
            <button className="flex items-center gap-3 py-2 px-4 text-[12px] font-bold bg-white text-gray-500 border border-gray-300 rounded-full">
              Owned By
              <img src={downArrowIcon} alt="downArrow" width={15} height={15} />
            </button>
            <button className="flex items-center gap-3 py-2 px-4 text-[12px] font-bold bg-white text-gray-500 border border-gray-300 rounded-full">
              Modified
              <img src={downArrowIcon} alt="downArrow" width={15} height={15} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src={fileTransferIcon} alt="file" width={18} height={18} />
          <img src={layoutIcon} alt="layout" width={18} height={18} />
          <img
            src={notificationCircleIcon}
            alt="notification"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div>
        <div className="w-100 bg-white border-t border-gray-100">
          <div className="flex items-center justify-between w-4/5	p-4 bg-white">
            <div className="flex items-center gap-5 w-1/2">
              <p className="text-[#00000080] font-bold">Name</p>
              <img src={upDownArrowIcon} alt="upDown" />
            </div>
            <div className="flex items-center font-bold justify-between w-1/2 text-[#00000080]">
              <p className=" ">Category</p>
              <p className="">Shared with</p>
              <p className="">Last Modified</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {data.data.map((item, index) => (
        <PaperDetails
          key={index}
          file_name={item.file_image}
          name={item.name}
          category={item.Category}
          last_modified={item.Last_Modified}
          shared_with={item.Shared_with}
        />
      ))}
    </div>
  );
};

export default dashboardContent;
