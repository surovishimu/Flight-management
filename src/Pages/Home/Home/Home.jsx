import ModifySearch from "../ModifySearch/ModifySearch";
import RightSide from "../Section2/RightSide";
import LeftSide from "../Section2/leftSide";


const Home = () => {
    return (
        <div>
            <ModifySearch></ModifySearch>
            <div className="flex lg:flex-row flex-col mt-16 gap-4 ">
                <LeftSide></LeftSide>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default Home;