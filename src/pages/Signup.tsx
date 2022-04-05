import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signup } from "../api/auth";
import "../signin.css"

type FormValues = {
    name: string,
    email: string,
    password: string
};
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        signup(data);
        navigate("/signin");
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
               

                <div className="container">
                    <h1>Form Đăng Ký</h1>
                    <p>Xin hãy nhập biểu mẫu bên dưới để đăng ký.</p>
                    <hr />
                    <label htmlFor="email"><b>Tên </b></label>
                    <input type="text" {...register('name', { required: true, minLength: 5 })} />
                    {errors.name && errors.name.type === "required" && <span>Required</span>}
                    {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" {...register('email', { required: true })} />
                    <label htmlFor="psw"><b>Mật Khẩu</b></label>
                    <input type="password" {...register('password')} />


                    <label>
                        <input type="checkbox" name="remember" style={{ marginBottom: 15 }} /> Nhớ Đăng Nhập
                    </label>
                    <div className="clearfix">
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup