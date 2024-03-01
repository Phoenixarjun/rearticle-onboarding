import featuresLogo from "../../assets/dashboard/features.svg";
import filesLogo from "../../assets/dashboard/files.svg";
import manageLogo from "../../assets/dashboard/manage.svg";
import settingLogo from "../../assets/dashboard/setting.svg";
import shareLogo from "../../assets/dashboard/share.svg";
import NavigationLink from "./NavigationLink";
const navigation = ["Your Papers","Shared Papers","Features","Settings","Manage"];

const sidebar = () => {
  return (
    <div className="flex flex-col gap-6 w-64 p-5">
      <button className="bg-primary rounded-2xl flex justify-center border-0 shadow-md py-3 text-white font-semibold text-center">
        + New Project
      </button>
      <div className="flex flex-col gap-4">
        <p className="flex items-center gap-4 text-secondary font-semibold">
          <img src={filesLogo} alt="file" height={20} width={20} /> Your Papers
        </p>
        <p className="flex items-center gap-4 text-secondary font-semibold">
          <img src={shareLogo} alt="share" height={20} width={20} /> Shared
          Papers
        </p>
        <p className="flex items-center gap-4 text-secondary font-semibold">
          <img src={featuresLogo} alt="features" height={20} width={20} />
          Features
        </p>
        <p className="flex items-center gap-4 text-secondary font-semibold">
          <img src={settingLogo} alt="setting" height={20} width={20} />
          Settings
        </p>
        <p className="flex items-center gap-4 text-secondary font-semibold">
          <img src={manageLogo} alt="manage" height={20} width={20} />
          Manage
        </p>
      </div>
    </div>
  );
};

export default sidebar;
