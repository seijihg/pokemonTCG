import React from "react";
const randomNumber= Math.floor((Math.random() * 1000) + 1)

class SkillsDropDown extends React.Component {


  skillSet = () => {
    const skills = this.props.attacks.filter(skill => {return skill.damage > 0 })
    console.log(skills)
    return(
      <select onChange={(e) => this.props.handleSkillSelection(skills.find(s => s.name === e.target.value))} ref="select">
        <option value="0" selected>--Please choose a skill--</option>
        {skills.map(attk => {
          return (
            <option value={attk.name} selected={this.props.playerChosenSkill === attk.name}>{attk.name}</option>
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
