import React from 'react'
import ReactDOM from 'react-dom';
import './App.css';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,ButtonGroup
  } from 'reactstrap';

class regForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:'',
            mname:'',
            lname:'',
            email:'',
            pwd:'',
            mobile:'',
            gender:'',
            city:'',
            occupation:'',
            hobbies: [],
            employee:'',
            student:''
        }
    }

    handleChange = (e) =>{
      
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        })

        if(e.target.name==='fname'){
          if(e.target.value==='' || e.target.value===null ){
            this.setState({
              fnameError:true,
            })
          } else {
            this.setState({
              fnameError:false,     
              fname:e.target.value
            })
          }
        }

        if(e.target.name==='lname'){
          if(e.target.value==='' || e.target.value===null ){
            this.setState({
              lnameError:true,
            })
          } else {
            this.setState({
              lnameError:false,     
              lname:e.target.value
            })
          }
        }

        if(e.target.name==='email'){
          if(e.target.value==='' || e.target.value===null ){
            this.setState({
              emailError:true,
            })
          }
            let emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); 
            if(emailValid == null) {
            this.setState({
                emailError:true,
            })
          } else {
            this.setState({
              emailError:false,     
              email:e.target.value
            })
          }
        }

        if(e.target.name==='pwd'){
          if(e.target.value==='' || e.target.value===null ){
            this.setState({
              pwdError:true,
            })
          } 
           if(e.target.value.length<6){
            this.setState({
              pwdError:true,
            })
          }
          else {
            this.setState({
              pwdError:false,     
              pwd:e.target.value
            })
          }
        }

        if(e.target.name==='mobile'){
          if(e.target.value==='' || e.target.value===null ){
            this.setState({
              mobileError:true,
            })
          }
            let mobileValid = e.target.value.match(/^\d{10}$/); 
            if(mobileValid == null) {
            this.setState({
              mobileError:true,
            })
          } else {
            this.setState({
              mobileError:false,     
              mobile:e.target.value
            })
          }
        }

        if(e.target.name==='gender'){
          this.setState({
            gender: e.target.value
          })
        }

        if(e.target.name==='hobbies'){
          const {hobbies}=this.state
          let index;
          if(e.target.checked){
            hobbies.push(e.target.value)
          }
          else{
            index=hobbies.indexOf(e.target.value)
            hobbies.splice(index,1)
          }
          this.setState({ hobbies:hobbies})
          console.log(hobbies)
          }

          if(e.target.name==='occupation'){
            
          }

    }
    validateForm = e => {
      if(this.state.fname==false || this.state.lname==false || this.state.email==false){
        alert("required")
        //console.log(this.state)
        //document.getElementById('errorMsg').innerHTML="required";
      }
      else{
        console.log(this.state)
      }
    }
    render(){
    return(<div>
        <Container className="App">
        <h2>Sign In</h2>
        <Form className="form" >
        <Col>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="fname"
                id="fname"
                placeholder="Firstname"
                onBlur={this.handleChange}
              />
              {this.state.fnameError ? 
              <span className="error">Please enter First name</span> : ''} 
            </FormGroup>
        </Col>
        <Col>
            <FormGroup>
              <Label>Middle Name</Label>
              <Input
                type="text"
                name="mname"
                id="manme"
                placeholder="Middlename"
                onBlur={this.handleChange}
              />
            </FormGroup>
        </Col>
        <Col>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lname"
                id="lanme"
                placeholder="Lastname"
                onBlur={this.handleChange}
              />
              {this.state.lnameError ? 
              <span className="error">Please enter last name</span> : ''}
            </FormGroup>
        </Col>
        <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                onBlur={this.handleChange}
              />
              {this.state.emailError ? 
              <span className="error">Please enter email</span> : ''}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="pwd"
                placeholder="********"
                onBlur={this.handleChange}
              />
              {this.state.pwdError ? 
              <span className="error">Please enter password</span> : ''}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Mobile</Label>
              <Input
                type="text"
                name="mobile"
                id="mobile"
                onBlur={this.handleChange}
              />
              {this.state.mobileError ? 
              <span className="error">Please enter mobile no</span> : ''}
            </FormGroup>
          </Col>

          <Label>Gender</Label>
          <Col>
            <FormGroup>
            
              <Input
                    type="radio"
                    name="gender" 
                    checked="checked"
                    value="male"
                    onChange={this.handleChange}/>
                    <Label>Male
            </Label>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
              <Input
                    type="radio"
                    name="gender" 
                    value="female"
                    onChange={this.handleChange}/>
                    <Label>Female
            </Label>
            </FormGroup>
          </Col>
          <Label>Hobbies
            </Label>
          <Col>
          
            <FormGroup>
              <Input
                    type="checkbox"
                    name="hobbies" 
                    value="reading"
                    onChange={this.handleChange}/>
                    <Label>Reading
            </Label>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
            
              <Input
                    type="checkbox"
                    name="hobbies" 
                    value="swimming"
                    onChange={this.handleChange}/>
                    <Label>Swimming
            </Label>
            </FormGroup>
            </Col>

            <Col>
            <FormGroup>
            
              <Input
                    type="checkbox"
                    name="hobbies" 
                    value="cooking"
                    onChange={this.handleChange}/>
                    <Label>Cooking
            </Label>
            </FormGroup>
            </Col>

            <Col>
            <FormGroup>
              <select>
                  <option>Ahmedabad</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
              </select>
            </FormGroup>
            </Col>

            <Col>
            <Label>Occupation</Label>
            <FormGroup>
              <Input
                    type="checkbox"
                    name="occupation" 
                    value="student"
                    onChange={this.handleChange}/>
                    <Label>Student
            </Label>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
              <Input
                    type="checkbox"
                    name="occupation" 
                    value="employee"
                    onBlur={this.handleChange}/>
                    <Label>Employee
            </Label>
            </FormGroup>
            </Col>        
            <Input type="button" value="submit" onClick={this.validateForm} ></Input>
        </Form>
    
        </Container>
    </div>

    );
}
}
export default regForm;