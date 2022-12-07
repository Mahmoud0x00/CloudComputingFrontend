import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

const FormInputError = (props) => {
    return (
        <Alert color="failure" icon={HiInformationCircle}>
            {props.children}
        </Alert>
    );
  };
  
  export default FormInputError;
  