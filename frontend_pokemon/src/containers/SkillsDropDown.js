import React from "react";

class SkillsDropDown extends React.Component {
  render() {
    const options = this.props.pokemon.attacks.map(attack => {
      return (
        <option>
          {" "}
          {attack.name}: {attack.damage}
        </option>
      );
    });

    return (
      <div>
        <form onSubmit={this.props.handleSkillSelection}>
          <label>
            <p>Choose your players skill</p>
            <select>{options}</select>
            <button type="submit"> Battle </button>
          </label>
        </form>
      </div>
    );
  }
}

export default SkillsDropDown;
