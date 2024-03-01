import featuresLogo from "../../assets/dashboard/features.svg";
import filesLogo from "../../assets/dashboard/files.svg";
import manageLogo from "../../assets/dashboard/manage.svg";
import settingLogo from "../../assets/dashboard/setting.svg";
import shareLogo from "../../assets/dashboard/share.svg";
import NavigationLink from "./NavigationLink";
import linkName from "./data.json";

const sidebar = () => {
  return (
    <div className="flex flex-col gap-6 w-64 p-5">
      <button className="bg-primary rounded-2xl flex justify-center border-0 shadow-md py-3 text-white font-semibold text-center">
        + New Project
      </button>
      <div className="flex flex-col gap-4">
        {linkName.navLinks.map((item, index) => (
          <NavigationLink
            key={index}
            file_name={item.image}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default sidebar;
