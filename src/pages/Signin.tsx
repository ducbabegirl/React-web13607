import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { signin, signup } from "../api/auth";
import { authenticate } from "../utils/loaclStorage";
import Footer from "../components/Footer";
import "../signin.css"

type FormValues = {
    name: string,
    email: string,
    password: string
};
const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const { data: user } = await signin(data);
        authenticate(user, () => navigate('/'))
    }
    return (
        <><div>
   
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <h1>Form Đăng Ký</h1>
                    <p>Xin hãy nhập biểu mẫu bên dưới để đăng ký.</p>
                    <hr />
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Nhập Email" required {...register('email', { required: true })} />
                    <label htmlFor="psw"><b>Mật Khẩu</b></label>
                    <input type="password" placeholder="Nhập Mật Khẩu"required  {...register('password')} />
                   
                    
                    <label>
                        <input type="checkbox" name="remember" style={{ marginBottom: 15 }} /> Nhớ Đăng Nhập 
                    </label>
                    <div className="clearfix">
                        <button type="submit" className="signupbtn">Sign in</button>
                    </div>
                </div>
            </form>




            <Footer />
        </div>

        </>
    )
}

export default Signin