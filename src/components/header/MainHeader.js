import { Link } from "react-router-dom";
import Button from "../UI/Button";

const MainHeader = () => {
  return (
    <nav style={{padding: "20px"}}>
      <Link to="/posts" >
        <Button>Back to Posts</Button>
      </Link>
    </nav>
  );
};

export default MainHeader;
