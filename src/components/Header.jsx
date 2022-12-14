const Header = ({fontSize, color, shadow, font, transform, margin, p1, p2}) => {
    const style = {
        color : `var(${color})`,
        fontFamily : `var(${font})`,
        textShadow : `3px 3px ${shadow}`,
        transform,
        margin
    }
    return (
        <div className="header" style={{...style}}>
            {p1}
            <br/>
            {p2}
        </div>
    )
}

export default Header