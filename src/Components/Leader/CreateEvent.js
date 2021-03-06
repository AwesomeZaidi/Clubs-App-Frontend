import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import { createEvent } from "../../js/actions/index";
import logo from '../../Images/logo-only.png';
import '../../Styles/dashboard.scss';
import axios from 'axios';

class CreateEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            date: '',
            timeStart: '',
            timeEnd: '',
            location: '',
            eventCreated: false
        };
    };

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    };

    validateForm() {
        return this.state.title.length > 0;
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = this.state;
        await axios.post(`https://clubs-app-backend.herokuapp.com/event`, eventData).then((res) => {   
            this.setState({
                eventCreated: res.data.event._id
            });
        });
    };

    render() {
        if (this.state.eventCreated) {
            return <Redirect to={`/event/${this.state.eventCreated}`} />
        };
        return (
            <div className="user-form">
                <img className="med-logo-only" src={logo} alt="Make School"></img>
                <h1>Add Event</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='title' id='title' placeholder='Title' value={this.state.title} onChange={this.handleChange} />     
                    <input type='text' name='description' id='description' placeholder='Description' value={this.state.description} onChange={this.handleChange} />       
                    <input type='date' name='date' id='date' value={this.state.date} onChange={this.handleChange} />                
                    <input type='time' name='timeStart' id='timeStart' value={this.state.timeStart} onChange={this.handleChange} />                
                    <input type='time' name='timeEnd' id='timeEnd' value={this.state.timeEnd} onChange={this.handleChange} />
                    <input type='text' name='location' placeholder='Location' id='location' value={this.state.location} onChange={this.handleChange} />
                    <button className="black_btn" type='submit' disabled={!this.validateForm()} >Submit</button>          
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { user: state.user};
};

export default connect(mapStateToProps, null)(CreateEvent);
