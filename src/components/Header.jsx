const Header = ({fontSize, color, shadow, font, transform, margin, p1, p2}) => {
    const style = {
        fontSize,
        color : `var(${color})`,
        fontFamily : `var(${font})`,
        textShadow : `3px 3px ${shadow}`,
        lineHeight : `${fontSize}`,
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