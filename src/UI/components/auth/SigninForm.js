import React, {useContext, useState}  from "react";
import Authcontext from "../../../store/Authcontext";
import { useNavigate } from "react-router-dom";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useForm } from "react-hook-form";
import TextInput from "../../form/Textinput";

const SigninForm = () => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const authcontext = useContext(Authcontext);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [ successMessage, setSuccessMessage ] = useState([]);

    const submitHandler = async (formData) => {
        try{
            const response = await fetch('http://localhost:9000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const responseData = await response.json();

            if(!response.ok){
                throw new Error(responseData.error) || Error(responseData.message);
            }
            authcontext.login(responseData.jwt);
            setSuccess(true);
            setSuccessMessage(responseData.message);
            navigate('/mytickets');
        } catch (err) {
            setError(err.message || 'Something went wrong, please try again.');
        }
    }
    return (
        <div>
            {error && (
                <Alert color="failure" icon={HiInformationCircle}>
                    {error}
                </Alert>
            )}
            {success && (
                <Alert
                    color="success"
                >
                    {successMessage}
                </Alert>
            )}
            <h5 className="text-lg justify-center text-center text-blue-700 py-9" style={{
                fontFamily: 'Poppins',
                fontWeight: 'bold',
                fontSize: '30px',
            }}>👋Please submit your account info👋</h5>
            <form className="flex flex-col p-10 gap-5 bg-gray-800 h-fit" onSubmit={handleSubmit(submitHandler)} style={
                {
                    borderRadius: "40px"
                }
            }>
                <TextInput
                    label="email"
                    type="email"
                    placeholder="Enter your email address..."
                    register={register}
                    validation={{ required: true }}
                />
                {formState.errors.email && <p className="text-red-400">Email is required</p>}

                <TextInput
                    label="password"
                    type="password"
                    placeholder="Enter your password..."
                    register={register}
                    validation={{ required: true }}
                />
                {formState.errors.password && <p className="text-red-500">Password is required</p>}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SigninForm;