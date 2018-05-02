import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import "./Browse.css";

const tags = [
    <MenuItem key={0} value={0} primaryText="Tag" disabled />,
    <MenuItem key={1} value={1} primaryText="Library" />,
    <MenuItem key={2} value={2} primaryText="Data" />,
    <MenuItem key={3} value={3} primaryText="Server" />,
    <MenuItem key={4} value={4} primaryText="Backend" />,
    <MenuItem key={5} value={5} primaryText="Language" />,
    <MenuItem key={6} value={6} primaryText="Framework" />,
    <MenuItem key={7} value={7} primaryText="Language Feature" />,
    <MenuItem key={8} value={8} primaryText="World Wide Web" />,
    <MenuItem key={9} value={9} primaryText="Software" />,
    <MenuItem key={10} value={10} primaryText="Frontend" />,
    <MenuItem key={11} value={11} primaryText="Git" />,
    <MenuItem key={12} value={12} primaryText="Miscellaneous" />
];

class TagMenu extends Component {
    state = {
      value: 0,
    };
  
    handleChange = (event, index, value) => this.setState({value});
  
    render() {
      return (
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
          >
            {tags}
          </SelectField>
      );
    }
}

const Browse = props => (
    <div className="browse">

        <h1>Browse Terms by </h1>
        <TagMenu className="menu"/>

        <br/>

        <div className="letters">
            <button>a</button>
            <button>b</button>
            <button>c</button>
            <button>d</button>
            <button>e</button>
            <button>f</button>
            <button>g</button>
            <button>h</button>
            <button>i</button>
            <button>j</button>
            <button>k</button>
            <button>l</button>
            <button>m</button>
            <button>n</button>
            <button>o</button>
            <button>p</button>
            <button>q</button>
            <button>r</button>
            <button>s</button>
            <button>t</button>
            <button>u</button>
            <button>v</button>
            <button>w</button>
            <button>x</button>
            <button>y</button>
            <button>z</button>
        </div>
        
    </div>
);

export default Browse;