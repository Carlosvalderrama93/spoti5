import IconEmail from "../icons/IconEmail";
import IconPassword from "../icons/IconPassword";
import Button from "../Button";
import Input from "../Input";

export default function LoginForm() {
  return (
    <form className="form">
      <div className="input-svg">
        <Input require type="email" placeholder="Email" />
        <IconEmail />
      </div>
      <div className="input-svg">
        <Input required type="password" placeholder="Password" />
        <IconPassword />
      </div>
      <Button buttonClass="background-white">LOG IN</Button>
    </form>
  );
}
