// import Proptypes from "prop-types"

export const FeedbackOptions =({options,onLeaveFeedback})=>{
    return (
        <>
       {options.map((option)=>(
        <button key ={option} type="button" onClick={onLeaveFeedback}>
          {option}
         </button>
       ))}

        {/* // })
        // <button type="button" onClick={this.handleAddPointGood}>
        //   Good
        // </button>
        // <button type="button" onClick={this.handleAddPointNeurtal}>
        //   Neutral
        // </button>
        // <button type="button" onClick={this.handleAddPointBad}>
        //   Bad
        // </button> */}
        </>
    )
}

FeedbackOptions.propTypes = {

}