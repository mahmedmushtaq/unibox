import { useEffect } from "react";
import LoadingScreen from "../../../components/shared/LoadingScreen";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        await Auth.signOut();
        navigate("/sign-in");
      } catch (err) {
        console.log("err ", err);
      }
    })();
  }, []);
  return <LoadingScreen text="Please wait! we are looging you out" />;
};

export default SignOut;
