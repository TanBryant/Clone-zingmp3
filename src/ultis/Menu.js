import icons from "./Icon";


const { MdOutlineLibraryMusic, MdOutlineFeed, TbChartArcs, HiOutlineChartPie } = icons
export const sidebarMenu = [
    {
        path: "mymusic",
        text: "Cá nhân",
        icons: <MdOutlineLibraryMusic size={24}/>,
    },
    {
        path: "",
        text: "Khám phá",
        end: true,
        icons: <HiOutlineChartPie size={24}/>,
    },
    {
        path: "zing-chart",
        text: "#zingchart",
        icons: <TbChartArcs size={24}/>,
    },
    {
        path: "follow",
        text: "Theo dõi",
        icons: <MdOutlineFeed size={24}/>,
    },
];
