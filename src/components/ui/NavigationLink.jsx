import featuresLogo from "../../assets/dashboard/features.svg";

const NavigationLink = ({ image, label }) => {
  return (
    <div className="flex items-center gap-4 text-secondary font-semibold">
      <img src={featuresLogo} alt={label} className="size-5" />
      <p>{label}</p>
    </div>
  );
};

export default NavigationLink;
