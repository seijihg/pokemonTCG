import React from "react";
const randomNumber= Math.floor((Math.random() * 1000) + 1)

class SkillsDropDown extends React.Component {

  skillSet = () => {
    const skills = this.props.attacks.filter(skill => {return skill.damage > 0 })
    console.log(skills)
    return(
      <select onChange={this.props.handleSkillSelection}>
        <option value="0" selected>--Please choose a skill--</option>
        {skills.map(attk => {
          return (
            <option value={attk.damage}>{attk.name}</option>
          )
        })}
      </select>
    )
  }

  render() {
    return (
      <>
        {this.skillSet()}
      </>
    )
  }
}

export default SkillsDropDown;
