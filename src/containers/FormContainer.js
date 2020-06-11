import React, {Component} from 'react';  
import { API } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

/* Import Components */
import Input from '../components/input';   
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import LoaderButton from '../components/LoaderButton'
import "./FormStyle.css"
import { Label } from 'semantic-ui-react';

class FormContainer extends React.Component {  
    
  constructor(props) {
    super(props);

    this.state = {
      newBlog: {
        name: '',
        topic: '',
        title: '',
        content: '',
        date: ''
        
      },

      topicOptions: ['Science', 'Comp', 'Fix It'],

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleTopic = this.handleTopic.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }
  

  createBlog(blog) {
    alert("Blog created" + blog)
    return API.post("blogs", "/blogs", {
      body: blog
    });
  }

  /* This life cycle hook gets executed when the component mounts */

  async handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newBlog;
    
    this.createBlog(userData);
  }
  handleClearForm(e) {
    e.preventDefault();
      this.setState({ 
        newBlog: {
          name: '',
          topic: '',
          title: '',
          content: '',
          date: ''
        },
      })
  }

  handleFullName(e) {
    let value = e.target.value;
    this.setState( prevState => ({ newBlog : 
         {...prevState.newBlog, name: value
         }
       }))
   }

   handleTopic(e) {
       let value = e.target.value;
       this.setState( prevState => ({ newBlog :
            {...prevState.newBlog, topic: value}
        }), () => console.log(this.state.newBlog))
   }

   handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => {
       return { 
          newBlog : {
                   ...prevState.newBlog, [name]: value
                  }
       }
    }, () => console.log(this.state.newBlog)
    )
    }

    

  render() {
    return (
      <div className="content">
      <form className="container" onSubmit={this.handleFormSubmit}>
        <Input type={'text'}
            title= {'Date'} 
            name= {'date'}
            value={this.state.newBlog.date} 
            placeholder = {'Enter the date - mm-dd-yy'}
            handleChange = {this.handleInput} 
        />
        
        <Input type={'text'}
            title= {'Full Name'} 
            name= {'name'}
            value={this.state.newBlog.name} 
            placeholder = {'Enter your name'}
            handleChange = {this.handleFullName}
        /> 
        <Input type={'text'}
            title= {'Title'} 
            name= {'title'}
            value={this.state.newBlog.topic} 
            placeholder = {'Enter the title'}
            handleChange = {this.handleTopic}
        />
        <Select title={'Topic'}
            name={'topic'}
            options = {this.state.topicOptions} 
            value = {this.state.newBlog.topic}
            placeholder = {'Select Topic'}
            handleChange = {this.handleInput}
        />
        <TextArea type={'TextArea'}
            componentClass="textarea"
            title={'Content'}
            name={'content'}
            value = {this.state.newBlog.content}
            placeholder = {'Blog content goes here'}
            handleChange = {this.handleInput}/>
        
            <LoaderButton
            block
            type="submit"
            bsSize="large"
          >
            Submit
          </LoaderButton>
        <LoaderButton /> {/* Clear the form */}
      </form>
      </div>
    );
  }
}

export default FormContainer;
