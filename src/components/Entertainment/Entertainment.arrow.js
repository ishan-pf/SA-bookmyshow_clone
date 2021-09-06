import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export const NextArrowE = (props) => {

    return(

        <>

        <div 
        
        className=""
        style =  { {...props.style ,   backgroundColor:"#666666", opacity:"1", width:"3rem" , height:"3rem",display:"flex",justifyContent:"center",alignItems:"center", borderRadius:"70%",position:"absolute",left:"97.3%",top:"43%",zIndex:"3" } }
        onClick = {props.onClick}
           >
        <span><IoIosArrowForward className="text-white text-3xl cursor-pointer opacity-100" /></span>
        
        </div>
        </>
    )

};


export const PrevArrowE = (props) => {

    return(

        <>

        <div 
        
        className=""
        style =  { {...props.style ,   backgroundColor:"#666666", opacity:"1", width:"3rem" , height:"3rem",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"70%" ,position:"absolute",top:"44%",left:"-0.5%",zIndex:"3"} }
        onClick = {props.onClick}
           >
        <span><IoIosArrowBack className="text-white text-3xl cursor-pointer opacity-100" /></span>
        
        </div>
        </>
    )

};