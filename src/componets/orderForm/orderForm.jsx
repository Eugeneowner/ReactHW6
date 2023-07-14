import s from './orderForm.module.scss'
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { clearBasket } from '../../redux/mainReduser';
import { useDispatch } from 'react-redux';
import { PatternFormat } from 'react-number-format';
const Form =(props) => {
    const dispatch = useDispatch()
    const printBuyList = () => {
        const buyList = props.auto.filter(autoItem => props.basketList.indexOf(autoItem.id) !== -1)
        console.log(buyList)
    }
    const clearBuyList = () => {
        localStorage.setItem('basketList',JSON.stringify([]))
        localStorage.setItem('countBuy', 0)
        dispatch(clearBasket())
    }
    const formik = useFormik({
        initialValues: {
          email: '',
          name: '',
          lastName: '',
          age: '',
          address: '',
          phone: ''
        },
        onSubmit: (values,{resetForm}) => {
            console.log(values)
            printBuyList()
            resetForm()
            clearBuyList()
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required("Please enter a valid email address"),
            name: Yup.string()
                .min(1, "Please enter a valid name")
                .max(30, "Please enter a valid name")
                .required("Please enter name"),
            lastName: Yup.string()
                .min(1, "Please enter a valid lastname")
                .max(30, "Please enter a valid lastname")
                .required("Please enter lastname"),
            age: Yup.number()
                .min(18, "Please enter a valid age")
                .max(100, "Please enter a valid age")
                .required("Please enter age"),
            address: Yup.string()
                .required("Please enter address"),
            phone: Yup.string()
                .required("Enter phone number")

        })
      });
   
    return (
        <form 
            onSubmit={formik.handleSubmit} 
            className={s.form}
            noValidate
        >
            <div>
                <label>Email:</label>
                <input
                    placeholder='Enter email'
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                    <p>{formik.errors.email}</p>
                )}
            </div>
            <div>
                <label>Name</label>
                <input
                    placeholder='Enter you Name'
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                    <p>{formik.errors.name}</p>
                    )}
            </div>
            <div>
                <label>Last Name</label>
                <input
                    placeholder='Enter your Last Name'
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                    <p>{formik.errors.lastName}</p>
                    )}
            </div>
            <div>
                <label>Age</label>
                <input
                    placeholder='Enter you age'
                    id="age"
                    name="age"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
                {formik.touched.age && formik.errors.age && (
                    <p>{formik.errors.age}</p>
                    )}
            </div>
            
            <div>
                <label>Address</label>
                <input
                placeholder='Enter your address'
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                    value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address && (
                    <p>{formik.errors.address}</p>
                )}
            </div>
            <div>
                <label>Phone</label>
                <PatternFormat
                    format="+38 (###) ###-##-##"
                    allowEmptyFormatting mask="_"
                     placeholder='Phone'
                     id="phone"
                     name="phone"
                     type="tel"
                     onChange={formik.handleChange}
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <p>{formik.errors.phone}</p>
                )}
            </div>
            <button type="submit">Checkout</button>
        </form>    
    )
}
export default Form