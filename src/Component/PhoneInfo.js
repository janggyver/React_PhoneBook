import React, {Component} from 'react';

class PhoneInfo extends Component{

    static defaultProps = {
        info : {
            name: 'Name',
            phone: '000-000-0000',
            id: 0
        }
        
    }

    state = {
        editing: false,
        name:'',
        phone: ''
    }

    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    //Toggle editing valuse
    handleToggleEdit = () => {
        const {editing} = this.state;
        this.setState({
            editing: !editing })
    }

    //event for input changed
    handleChange = (e) => {
        const{name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    componentDidUpdate(prevProps, prevState){
        const {info, onUpdate} = this.props;
        if(!prevState.editing && this.state.editing){
            this.setState({
                name: info.name,
                phone: info.phone

            })
        }

        if(prevState.editing && !this.state.editing){
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    render(){
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {editing} = this.state;

        if(editing){ //edit mode
            return(
                <div style={style}>
                    <div>
                        <input 
                        value={this.state.name}
                        name="name"
                        placeholder = "Name"
                        onChange = {this.handleChange}
                         />
                    </div>

                    <div>
                        <input 
                        value={this.state.phone}
                        name="phone"
                        placehoder="Phone" 
                        onChange = {this.handleChange}  
                        />

                    </div>
                    <button onClick={this.handleToggleEdit} >Apply</button>
                    <button onClick={this.handleRemove}>Delete</button>
                </div>
            );
        }
        //general mode
        const {
            name, phone
        } = this.props.info;

        return(
            <div style = {style}>
                <div>
                    <b>{name}</b>
                </div>
                <div>
                    {phone}
                </div>
                <button onClick = {this.handleToggleEdit}>Update</button>
                <button onClick = {this.handleRemove}>Delete</button>

            </div>
        )
    }
 

}

export default PhoneInfo;
