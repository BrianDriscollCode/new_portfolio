import stylings from "../../styles/home/Sectioner.module.scss";


//color1 and color2 passed from index to choose section colors
//classSCSS passes clip-path and height

const section = ( {color1, color2, classSCSS}: any) => {

    return (
        <div 
            className={stylings.sectioner_banner}
            style={{backgroundColor: color1}}
        >
            <div 
                className={classSCSS}
                style={{backgroundColor: color2}}
            >
            
            </div>
        </div>
    )

}

export default section;