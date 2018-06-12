import React, {Component} from 'react';

class Pros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prosInputs: []
        };
        this.prosChangeHandler = this.prosChangeHandler.bind(this);
    }

    prosChangeHandler(e) {
        let {prosInputs} = this.state,
            newProsInputs = [...prosInputs];

        if (e.target.value.length === 1 && !newProsInputs.includes(e.target.id)) {
            newProsInputs.push(e.target.id);
            this.setState({prosInputs: newProsInputs});
        } else if (newProsInputs.includes(e.target.id) && e.target.value.length === 0) {
            newProsInputs = newProsInputs.filter(id => {
                return id !== e.target.id
            });
            this.setState({prosInputs: newProsInputs});
        }
    }

    render() {
        let {prosInputs} = this.state;
        return (
            <div>
                <ol>
                    <li>
                        <input type="text" onChange={this.prosChangeHandler}/>
                    </li>
                    {prosInputs.map((inputText, index) => {
                        return (
                            <li key={index}>
                                <input id={index} type="text" onChange={this.prosChangeHandler}/>
                            </li>
                        )
                    })}
                </ol>
            </div>
        );
    }
}

export default Pros;