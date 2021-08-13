import { Link } from "react-router-dom";
import Button from "../UI/Button";

const MainHeader = () => {
  return (
    <Link to="/posts">
      <Button>Back to Posts</Button>
    </Link>
  );
};

export default MainHeader;
