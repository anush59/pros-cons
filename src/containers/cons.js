import React, {Component} from 'react';

class Cons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            consInputs: []
        };
        this.consChangeHandler = this.consChangeHandler.bind(this);
    }

    consChangeHandler(e) {
        let {consInputs} = this.state,
            newConsInputs = [...consInputs];

        if (e.target.value.length === 1 && !newConsInputs.includes(e.target.id)) {
            newConsInputs.push(e.target.id);
            this.setState({consInputs: newConsInputs});
        } else if (newConsInputs.includes(e.target.id) && e.target.value.length === 0) {
            newConsInputs = newConsInputs.filter(id => {
                return id !== e.target.id
            });
            this.setState({consInputs: newConsInputs})
        }
    }

    render() {
        let {consInputs} = this.state;
        return (
            <div>
                <ol>
                    <li>
                        <input type="text" onChange={this.consChangeHandler}/>
                    </li>
                    {consInputs.map((inputText, index) => {
                        return (
                            <li key={index}>
                                <input id={index} type="text" onChange={this.consChangeHandler}/>
                            </li>
                        )
                    })}
                </ol>
            </div>
        );
    }
}

export default Cons;