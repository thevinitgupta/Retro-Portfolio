import { useState, useEffect } from "react";

const Window = ({head, body, img, backgroundColor, margin, color, height, width, minHeight, maxWidth}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const style = {
        height,
        width,
        minHeight, 
        maxWidth,
        backgroundColor : `var(${backgroundColor})`,
        color,
        border : `3px solid var(${color})`,
        display : "flex",
        flexDirection : "column",
        margin
    };

    const barStyle = {
        flex : "0.14",
        width : "100%",
        display : "flex",
        justifyContent : "start",
        alignItems : "center",
        paddingLeft : "2%",
        gap : "4px",
        borderBottom : `3px solid var(${color})`
    }

    const dotStyle = {
        width : "10px",
        height : "10px",
        backgroundColor : `var(${color})`,
        border : "none",
        borderRadius : "50%"
    }

    const WindowData = () => (
        <>
            <div style={{fontWeight:"600", fontSize:`${screenWidth < 520 ? "1.5rem" : "1.8rem"}`,marginBottom : "10px", padding : "2% 4%"}}>{head}</div>
            <div style={{fontSize:`${screenWidth < 520 ? "1.1rem" : "1.4rem"}`, padding : "2% 4%"}}>{body}</div>
        </>
    );

    const bodyStyle= {
        flex : "0.88",
        width : "100%",
        objectFit : "contain",
        display : "flex",
        flexDirection : "column",
        overflow : "hidden"
    }

    const imgStyle = {
        width : "100%",
        height : "100%"
    }

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
    },[])

    return (
        <div className="window" style={style}>
            <div className="window-bar" style={barStyle}>
                <div className="dot" style={dotStyle}></div>
                <div className="dot" style={dotStyle}></div>
                <div className="dot" style={dotStyle}></div>
            </div>
            <div className="window-body" style={bodyStyle}>
                {img.length>0 ? 
                <img src={img} alt="company page" style={imgStyle}/> 
                : 
                <div className="window-text">
                    <WindowData/>
                </div>
                }
            </div>
        </div>
    )
}

export default Window;