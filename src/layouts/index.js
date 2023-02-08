import NavBar from "./NavBar";
import Menu from "./Menu";
import Content from "./Content";

export default function Layout(){
    return (
        <>
            <NavBar />
            <div className={"flex flex-row gap-2 px-8 pt-2"}>
                <div className="w-1/4 border border-gray-300 h-screen">
                    <Menu />
                </div>

                <div className={"w-3/4 border border-gray-300 h-screen"}>
                    <Content />
                </div>
            </div>
        </>
    );
};
