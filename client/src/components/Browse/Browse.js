import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import "./Browse.css";

const browseStyles = {
    fontSize: '1.25em',
    color: '#57bc90',
    fontWeight: 'bold'
};

const tags = [
    <MenuItem value={null} primaryText="" />,
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
      value: null,
    };
  
    handleChange = (event, index, value) => this.setState({value});
  
    render() {
      return (
        <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            floatingLabelText="Tag"
            floatingLabelStyle={browseStyles}
        >
            {tags}
        </SelectField>
      );
    }
}

const letters = [
    <MenuItem value={null} primaryText="" />,
    <MenuItem key={1} value={1} primaryText="A" />,
    <MenuItem key={2} value={2} primaryText="B" />,
    <MenuItem key={3} value={3} primaryText="C" />,
    <MenuItem key={4} value={4} primaryText="D" />,
    <MenuItem key={5} value={5} primaryText="E" />,
    <MenuItem key={6} value={6} primaryText="F" />,
    <MenuItem key={7} value={7} primaryText="G" />,
    <MenuItem key={8} value={8} primaryText="H" />,
    <MenuItem key={9} value={9} primaryText="I" />,
    <MenuItem key={10} value={10} primaryText="J" />,
    <MenuItem key={11} value={11} primaryText="K" />,
    <MenuItem key={12} value={12} primaryText="L" />,
    <MenuItem key={1} value={13} primaryText="M" />,
    <MenuItem key={2} value={14} primaryText="N" />,
    <MenuItem key={3} value={15} primaryText="O" />,
    <MenuItem key={4} value={16} primaryText="P" />,
    <MenuItem key={5} value={17} primaryText="Q" />,
    <MenuItem key={6} value={18} primaryText="R" />,
    <MenuItem key={7} value={19} primaryText="S" />,
    <MenuItem key={8} value={20} primaryText="T" />,
    <MenuItem key={9} value={21} primaryText="U" />,
    <MenuItem key={10} value={22} primaryText="V" />,
    <MenuItem key={11} value={23} primaryText="W" />,
    <MenuItem key={12} value={24} primaryText="X" />,
    <MenuItem key={11} value={25} primaryText="Y" />,
    <MenuItem key={12} value={26} primaryText="Z" />
];

class LetterMenu extends Component {
    state = {
      value: null,
    };
  
    handleChange = (event, index, value) => this.setState({value});
  
    render() {
      return (
        <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            maxHeight={200}
            floatingLabelText="Letter"
            floatingLabelStyle={browseStyles}
        >
            {letters}
        </SelectField>
      );
    }
}

const Browse = props => (
    <div className="browse">

        <div className="browse-by">
            <h2>Browse Terms by: </h2>
        </div>
        <div className="stack">
            <TagMenu className="menu"/>
            <LetterMenu className="menu"/>
        </div>
        
    </div>
);

export default Browse;