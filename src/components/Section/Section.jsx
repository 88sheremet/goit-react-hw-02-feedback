import Proptypes from "prop-types"

export const Section = ({title, children})=>{
return (
<>
<h2>{title}</h2>
{children}
</>
)
}

Section.propTypes = {
    title: Proptypes.string.isRequired,
}