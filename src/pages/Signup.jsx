import signupImg from "../Images/herov.jpg";
import Template from "../components/Template";

function Signup() {
  return (
    <Template
      title="Join the Code Master with Us"
      description1=""
      description2=""
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;
