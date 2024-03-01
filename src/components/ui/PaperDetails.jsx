import addIcon from "../../assets/dashboard/add.svg";
import refreshIcon from "../../assets/dashboard/refresh.svg";
import deleteIcon from "../../assets/dashboard/delete.svg";
import fileIcon from "../../assets/dashboard/file.svg";

const PaperDetails = ({ file_name, name, category, last_modified }) => {
  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-between p-10 pl-4 py-5 bg-white">
        <div className="flex justify-between gap-10 items-center w-4/5">
          <div className="flex items-center text-[15px] font-semibold gap-3 w-[55%]">
            <img src={fileIcon} alt="upDown" width={30} height={30} />
            <p>{name}</p>
          </div>
          <div className="flex items-center justify-between w-3/5">
            <p className="text-[15px] font-semibold w-[70px]">{category}</p>
            <div className="flex justify-center items-center">
              <p className="bg-[#2D7E66] rounded-full w-[22px] h-[22px] text-[9px] text-white flex items-center justify-center font-bold">
                A
              </p>
              <p className="bg-[#F9D864] -translate-x-2 rounded-full w-[22px] h-[22px] text-[9px] text-white flex items-center justify-center font-bold">
                S
              </p>
              <p className="bg-[#D74F4B] -translate-x-4 rounded-full w-[22px] h-[22px] text-[9px] text-white flex items-center justify-center font-bold">
                +5
              </p>
            </div>
            <p className="text-[15px] font-semibold">{last_modified}</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src={addIcon} alt="add" width={19} height={19} />
          <img src={refreshIcon} alt="refresh" width={19} height={19} />
          <img src={deleteIcon} alt="delete" width={19} height={19} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PaperDetails;
