import {
  CodeBracketIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";

function Services() {
  const techStack = [
    {
      icon: <PencilSquareIcon className="w-10 h-10" />,
      text: "UI/UX",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-10 h-10" />,
      text: "Mobile & Web App",
    },
    {
      icon: <CodeBracketIcon className="w-10 h-10" />,
      text: "Development",
    },
    {
      icon: <ComputerDesktopIcon className="w-10 h-10" />,
      text: "Design & Creative",
    },
  ];
  return (
    <section id="services" className="bg-container dark:bg-container_dark">
      <div className=" bg-container_lighter dark:bg-container_dark_lighter rounded-b-[100px]">
        {/* Services List */}
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 w-full h-full  ">
          {techStack.map(({ icon, text }, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 py-4 md:py-8"
            >
              {icon}
              <p className="text-xl font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
