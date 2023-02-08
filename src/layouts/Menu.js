import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Menu(){
    return (
        <>
            <div>
                <div className={"flex gap-1"}>
                    <button className={"w-full border py-2 text-white"} style={{background: "#f7941d"}}>Tags</button>
                    <button className={"w-full border py-2 text-white"} style={{background: "#f7941d"}}>Clients</button>
                    <button className={"w-full border py-2 text-white"} style={{background: "#f7941d"}}>Docs</button>
                </div>
                <ul className={"m-2 border"} style={{height:"500px", overflow:"auto"}}>
                    <li className={"border text-left py-2 pl-2 cursor-pointer hover:bg-gray-600 hover:text-gray-200 my-1"}>Document-1</li>
                    <li className={"border text-left py-2 pl-2 cursor-pointer hover:bg-gray-600 hover:text-gray-200 my-1"}>Document-2</li>
                    <li className={"border text-left py-2 pl-2 cursor-pointer hover:bg-gray-600 hover:text-gray-200 my-1"}>Document-3</li>
                </ul>

                <div className={"flex justify-end"}>
                    <AddCircleOutlineIcon style={{fontSize:50, cursor: "pointer"}} />
                </div>
            </div>
        </>
    );
};
