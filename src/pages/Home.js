import Challengeone from "../components/ChallengeOne";
import Timer from "../components/Timer";
import Todo from "../components/Todo";

const Home = () => {
    return ( 
        <div className="section">
            <h1>Home</h1>
            <Challengeone />
            <Timer />
            <Todo />
        </div>
     );
}
 
export default Home;