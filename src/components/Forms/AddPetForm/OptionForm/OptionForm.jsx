import { OptionList, CategoryOption } from "./OptionForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { formStage, optionForm } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { selectCategory } from "../../../../redux/petsSlice/selectors";


const OptionForm = () => {
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);

    const handleSelectCategory = ({ target: { value } }) => {
        const selectedCategory = value;

        dispatch(
            optionForm({
                category: selectedCategory,
            })
        );        
    };

    const onNextStep = () => {
        if (category === "pet"
            || category === "sell"
            || category === "lost-found"
            || category === "in-good-hands"
        ) {
            dispatch(
                formStage(2)
            );
        }
    }    

    return (
        <div>
            <OptionList>
                <li>
                    <CategoryOption
                        type="button"
                        value={"pet"}
                        onClick={handleSelectCategory}
                    >your pet</CategoryOption>
                </li>
                <li>
                    <CategoryOption
                        type="button"
                        value={"sell"}
                        onClick={handleSelectCategory}                        
                    >sell</CategoryOption>
                </li>
                <li>
                    <CategoryOption
                        type="button"
                        value={"lost-found"}
                        onClick={handleSelectCategory}                        
                    >lost/found</CategoryOption>
                </li>
                <li>
                    <CategoryOption
                        type="button"
                        value={"in-good-hands"}
                        onClick={handleSelectCategory}                        
                    >in good hands</CategoryOption>
                </li>                    
            </OptionList>
            <FormBtnNav onClick={onNextStep} />
        </div>
    );
};


export default OptionForm;