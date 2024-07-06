import { Quote } from "../components/Quote";
import { SignupForm } from "../components/SignupForm";

export function Signup(){
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <SignupForm />
        </div>
        <div className="none lg:block">
            <Quote />
        </div>
    </div>
}