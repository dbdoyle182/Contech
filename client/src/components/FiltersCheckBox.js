import React , { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';


class FiltersCheckBox extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            checked: false
        };

        this.updateCheck = this.updateCheck.bind(this);
    }    
    

    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }

    render() {
        return (
            <div>
                <Checkbox
                    label={this.props.tag}
                    value={this.props.tag}
                    checked={this.state.checked}
                    onCheck={this.updateCheck.bind(this)}
                />
            </div>
        );
    }
}

export default FiltersCheckBox;