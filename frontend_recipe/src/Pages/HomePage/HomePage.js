import RecipeList from "../../Components/RecipeList/RecipeList";
import Sidebar from "../../Components/Sidebar/Sidebar";
import './homepage.scss';

const HomePage = () => {
    return <div className="homepage" >
        <Sidebar />
        <RecipeList />
    </div>
}


export default HomePage;