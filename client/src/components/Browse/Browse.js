import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import "./Browse.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const browseStyles = {
    fontSize: '1.45em',
    color: 'white'
};

const browseItems = ['Library','Data', 'Server', 'Backend','Language','Framework','Language Feature','World Wide Web','Software','Frontend','Git','Miscellaneous',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const tags = [
    <MenuItem key ={101} value={null} primaryText="" />,
    <MenuItem key={1} value={0} primaryText="Library" />,
    <MenuItem key={2} value={1} primaryText="Data" />,
    <MenuItem key={3} value={2} primaryText="Server" />,
    <MenuItem key={4} value={3} primaryText="Backend" />,
    <MenuItem key={5} value={4} primaryText="Language" />,
    <MenuItem key={6} value={5} primaryText="Framework" />,
    <MenuItem key={7} value={6} primaryText="Language Feature" />,
    <MenuItem key={8} value={7} primaryText="World Wide Web" />,
    <MenuItem key={9} value={8} primaryText="Software" />,
    <MenuItem key={10} value={9} primaryText="Frontend" />,
    <MenuItem key={11} value={10} primaryText="Git" />,
    <MenuItem key={12} value={11} primaryText="Miscellaneous" />
];

class TagMenu extends Component {
    state = {
      value: null,
    };
  
    handleChange = (event, index, value) => {
        this.setState({value});
        this.props.callback(value)     
    };

    
  
    render() {
      return (
        <div>
        <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            underlineShow={false}
            selectedMenuItemStyle={{color: '#489b77'}}
            floatingLabelText="By Tag"
            floatingLabelStyle={browseStyles}
        >
            {tags}
        </SelectField>
        <div>
        
        </div>
        </div>
      );
    }
}

const letters = [
    <MenuItem key={100} value={null} primaryText="" />,
    <MenuItem key={13} value={12} primaryText="A" />,
    <MenuItem key={14} value={13} primaryText="B" />,
    <MenuItem key={15} value={14} primaryText="C" />,
    <MenuItem key={16} value={15} primaryText="D" />,
    <MenuItem key={17} value={16} primaryText="E" />,
    <MenuItem key={18} value={17} primaryText="F" />,
    <MenuItem key={19} value={18} primaryText="G" />,
    <MenuItem key={20} value={19} primaryText="H" />,
    <MenuItem key={21} value={20} primaryText="I" />,
    <MenuItem key={22} value={21} primaryText="J" />,
    <MenuItem key={23} value={22} primaryText="K" />,
    <MenuItem key={24} value={23} primaryText="L" />,
    <MenuItem key={25} value={24} primaryText="M" />,
    <MenuItem key={26} value={25} primaryText="N" />,
    <MenuItem key={27} value={26} primaryText="O" />,
    <MenuItem key={28} value={27} primaryText="P" />,
    <MenuItem key={29} value={28} primaryText="Q" />,
    <MenuItem key={30} value={29} primaryText="R" />,
    <MenuItem key={31} value={30} primaryText="S" />,
    <MenuItem key={32} value={31} primaryText="T" />,
    <MenuItem key={33} value={32} primaryText="U" />,
    <MenuItem key={34} value={33} primaryText="V" />,
    <MenuItem key={35} value={34} primaryText="W" />,
    <MenuItem key={36} value={35} primaryText="X" />,
    <MenuItem key={37} value={36} primaryText="Y" />,
    <MenuItem key={38} value={37} primaryText="Z" />
];

class LetterMenu extends Component {
    state = {
      value: null,
    };
  
    handleChange = (event, index, value) => {
        this.setState({value});

        this.props.callback(value)
    }
  
    render() {
      return (
        <div>
        <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            maxHeight={200}
            underlineShow={false}
            selectedMenuItemStyle={{color: '#489b77'}}
            floatingLabelText="By Letter"
            floatingLabelStyle={browseStyles}
        >
            {letters}
        </SelectField>
        </div>
      );
    }
}

class Browse extends Component {
    
constructor(props, context) {
    super(props, context);

    this.state = {
        filter: '',
        letter: '',
        results: []
    }

    this.childLetter = this.childLetter.bind(this)
    this.childFilter = this.childFilter.bind(this)
    this.browsingData = this.browsingData.bind(this)
}

componentDidMount() {}
childLetter (letter) {
    this.setState({
        letter: letter
    })
}

childFilter (filter) {
    this.setState({
        filter: filter
    })
}

browsingData () {
    
    if(this.state.letter !== '' && this.state.letter !== undefined && this.state.letter !== null
    && this.state.filter !== '' && this.state.filter !== undefined && this.state.filter !== null) {
        const filter = browseItems[this.state.filter]
        const letter = browseItems[this.state.letter]
        axios.get('/browseBy/' + filter + '/' + letter)
            .then(res => {
                this.setState({
                    results: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    } else if(this.state.filter !== '' && this.state.filter !== undefined && this.state.filter !== null) {
        const filter = browseItems[this.state.filter]
        axios.get('/filterBy/' + filter)
            .then(res => {
                this.setState({
                    results: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    } else if(this.state.letter !== '' && this.state.letter !== undefined && this.state.letter !== null) { 
        const letter = browseItems[this.state.letter]
        axios.get('/searchBy/' + letter)
            .then(res => {
                this.setState({
                    results: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    } 
}
    
    
render() {return (
    <div className="browse">
        <h2 className="title">Browse Terms</h2>
        <div className="holder">
            <div className="stack">
                <div className="menu"><TagMenu callback={this.childFilter}/></div>
                <div className="menu"><LetterMenu callback={this.childLetter}/></div>
            </div>
            <div>
                <button className="browse-button" onClick={this.browsingData}>Browse</button>
            </div>
        </div>
        <div>
            {this.state.results && this.state.results.map(result => {
                return (<div key={result._id}><Link to={'/search/' + result.word}>{result.word}</Link></div>)
            })}
        </div>
        
    </div>
)}
};

export default Browse;