import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from "../types/produc";


type ProductAddProps = {
    onAdd: (product:ProductType) => void
}
type FormValues ={
    name: string;
    price: number,
};


const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAdd(data);
        navigate('/admin/product');
    }
  return (
    <div>
        <h1>Thêm Sản Phẩm</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Tên Sản Phẩm' {...register('name', { required: true, minLength: 5})} style={{width:980, padding:10,}}/>
            <br />
            <br />
            {errors.name && errors.name.type === "required" && <span>Required</span>}
            <br />
            {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
            <br />
            <input type="number" placeholder='Giá Sản Phẩm' {...register('price')}  style={{width:980, padding:10}}/>
            <br />
            <br />
            <button style={{padding:8, width:100, borderRadius:10, backgroundColor:'#0A2558', color:'#fff'}}>Thêm</button>
        </form>
    </div>
  )
}

export default ProductAdd