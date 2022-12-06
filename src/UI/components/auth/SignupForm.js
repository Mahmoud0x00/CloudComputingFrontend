import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TextInput,Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

const SignUpForm = () => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();

    const submitHandler = async (formData) => {
        try{
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const responseData = await response.json();

            if(!response.ok){
                throw new Error(responseData.message);
            }
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    };
    return (
    <div>
            <h1 className="text-7xl justify-center text-center text-blue-700 py-9">Please submit your account info</h1>
            <form className="flex flex-col p-10 gap-5 bg-gray-800 h-fit" onSubmit={handleSubmit(submitHandler)} style={
                {
                    borderRadius: "40px"
                }
            }>
                <TextInput 
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    register={register}
                    validation={{ required: true }}
                />
                {formState.errors.email && (
                    <Alert color="failure" icon={HiInformationCircle}>Email is required</Alert>
                )}
                <TextInput
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    register={register}
                    validation={{ required: true }}
                />
                {formState.errors.password && (
                    <Alert color="failure" icon={HiInformationCircle}>Password is required</Alert>
                )}
                <TextInput
                    label="Name"
                    type="text"
                    placeholder="Enter your name"
                    register={register}
                    validation={{ required: true }}
                />
                {formState.errors.name && (
                    <Alert color="failure" icon={HiInformationCircle}>Name is required</Alert>
                )}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;