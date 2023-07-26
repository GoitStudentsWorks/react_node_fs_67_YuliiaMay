import FormTitle from "../FormTitle/FormTitle";
import defaultAvatar from "../../../../images/default-avatar.png"
import FormBtnNav from "../FormBtnNav/FormBtnNav";

const MoreInfoForm = () => {
    
    return ( 
        <>
            <FormTitle />
            <div>
                <p>Load the pet’s image:</p>
                <div>
                    <img src={defaultAvatar} alt="default avatar" />
                </div>
                
                <label htmlFor="comment">Comments</label>
                <textarea
                    type="text"
                    id="comment"
                    placeholder="Type of pet"
                ></textarea>
            </div>
            <FormBtnNav />
        </>
        
    );
}

export default MoreInfoForm;