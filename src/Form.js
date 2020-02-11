import React from 'react'
import './App.css';

import {
    Container, Col, Form,
    FormGroup, Label, Input,
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
            gender:'male',
            city:'',
            occupation:'student',
            hobbies: [],
            error:{}
        }
    }

    handleChange = (e) =>{
      

        if(e.target.name==='fname'){
          if(e.target.value==='' || e.target.value===null )
          {
            this.setState({
              fnameError:true,
              fnameErrorDetail:false,
            })
            e.target.style.borderColor="red" 
          } else if(e.target.value.length<3){
            this.setState({
              fnameError:false,
              fnameErrorDetail:true
            })
            e.target.style.borderColor="red" 
          }
          else {
            e.target.style.borderColor="green" 
            this.setState({
              fnameError:false,
              fnameErrorDetail:false,     
              fname:e.target.value
            })
            
          }
        }

        if(e.target.name==='lname'){
          if(e.target.value==='' || e.target.value===null )
          {
            this.setState({
              lnameError:true,
              lnameErrorDetail:false,
            })
            e.target.style.borderColor="red" 
          } else if(e.target.value.length<3){
            this.setState({
              lnameError:false,
              lnameErrorDetail:true
            })
            e.target.style.borderColor="red" 
          }
          else {
            e.target.style.borderColor="green" 
            this.setState({
              lnameError:false,
              lnameErrorDetail:false,     
              lname:e.target.value
            })
            
          }
        }

        if(e.target.name==='email'){
          let emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i); 
          if(e.target.value==='' || e.target.value===null ){
            this.setState({
              emailError:true,
              emailErrordetail:false,
            })
            e.target.style.borderColor="red" 
          }else if(emailValid == null) {
            this.setState({
                emailError:false,
                emailErrorDetail:true
            })
            e.target.style.borderColor="red" 
          } else {
            e.target.style.borderColor="green" 
            this.setState({
              emailError:false, 
              emailErrordetail:false,    
              email:e.target.value
            })
            
          }
        }

        if(e.target.name==='pwd'){
          let pwdValid = e.target.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i);
          if(e.target.value==='' || e.target.value===null ){
            this.setState({
              pwdError:true,
              pwdErrorDetail:false,
            })
            e.target.style.borderColor="red"  
          } 
           else if(pwdValid == null){
            this.setState({
              pwdError:false,
              pwdErrorDetail:true,
            })
            e.target.style.borderColor="red" 
          }
          else {
            e.target.style.borderColor="green" 
            this.setState({
              pwdError:false, 
              pwdErrorDetail:false,    
              pwd:e.target.value
            })
            
          }
        }

        if(e.target.name==='mobile'){
          let mobileValid = e.target.value.match(/^\d{10}$/); 
          if(e.target.value==='' || e.target.value===null ){
            this.setState({
              mobileError:true,
              mobileErrorDetail:false
            })
            e.target.style.borderColor="red"
          }else if(mobileValid === null) {
            this.setState({
              mobileError:false,
              mobileErrorDetail:true
            })
            e.target.style.borderColor="red"
          } else {
            this.setState({
              mobileError:false,
              mobileErrorDetail:false,     
              mobile:e.target.value
            })
            e.target.style.borderColor="green"
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
            if(e.target.value==="student"){
              this.setState({
                occupation:e.target.value
              })}
              else if(e.target.value==="employee"){
                this.setState({
                  occupation:e.target.value
                })
                }
              else{
                
              }
          }
          if(e.target.name==='city'){
            this.setState({
              city: e.target.value
            })
          }

    }
    validateForm = e => {
      let {fnameError,fnameErrorDetail,lnameError,lnameErrorDetail,emailError,emailErrorDetail,
        pwdError,pwdErrorDetail,mobileError,mobileErrorDetail}=this.state
        /* let {fname,lname,email,
          pwd,mobile}=this.state */
      if(fnameError==false && fnameErrorDetail==false && 
        lnameError==false && lnameErrorDetail==false &&
        emailError==false && emailErrorDetail==false &&
        pwdError==false && pwdErrorDetail==false &&
        mobileError==false && mobileErrorDetail==false){
        console.log("submitted");
      }
      else{
        console.log("error");
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
              <Label className="star">*</Label>
              <Input
              
                type="text"
                name="fname"
                id="fname"
                placeholder="Firstname"
                onBlur={this.handleChange}
              />
              {this.state.fnameError ? 
              <span className="error">First name can't be blank</span> : ''}<br/> 
              {this.state.fnameErrorDetail ? 
              <span className="error">First name is too short</span> : ''} 
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
              <Label className="star">*</Label>
              <Input
                type="text"
                name="lname"
                id="lname"
                placeholder="Lastname"
                onBlur={this.handleChange}
              />
              {this.state.lnameError ? 
              <span className="error">Last name can't be blank</span> : ''}
              {this.state.lnameErrorDetail ? 
              <span className="error">Last name is too short</span> : ''} 
            </FormGroup>
        </Col>
        <Col>
            <FormGroup>
              <Label>Email</Label>
              <Label className="star">*</Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="myemail@email.com"
                onBlur={this.handleChange}
              />
              {this.state.emailError ? 
              <span className="error">Email can't be blank</span> : ''}
              {this.state.emailErrorDetail ? 
              <span className="error">Invalid Email </span> : ''} 
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Password</Label>
              <Label className="star">*</Label>
              <Input
                type="password"
                name="pwd"
                placeholder="********"
                onBlur={this.handleChange}
              />
              {this.state.pwdError ? 
              <span className="error">Password can't be blank</span> : ''}
              {this.state.pwdErrorDetail ? 
              <span className="error">Invalid Password(length>8 and contain uppercae, lowercase and digit)</span> : ''} 
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Mobile</Label>
              <Label className="star">*</Label>
              <Input
                type="text"
                name="mobile"
                id="mobile"
                onBlur={this.handleChange}
              />
              {this.state.mobileError ? 
              <span className="error">Mobile can't be blank</span> : ''}
              {this.state.mobileErrorDetail ? 
              <span className="error">Invalid Mobile</span> : ''}
            </FormGroup>
          </Col>

          <Label>Gender</Label>
          <Label className="star">*</Label>
          <Col>
            <FormGroup>
            
              <Input
                    type="radio"
                    name="gender" 
                    checked={this.state.gender === 'male'}
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
                    checked={this.state.gender === 'female'}
                    name="gender" 
                    value="female"
                    onChange={this.handleChange}/>
                    <Label>Female
            </Label>
            </FormGroup>
          </Col>
          <Label>Hobbies
            </Label>
            <Label className="star">*</Label>
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
            <Label>City</Label>
            <Label className="star">*</Label><br></br>
              <select name="city" onChange={this.handleChange} >
                  <option value="select">select</option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
              </select>
            </FormGroup>
            </Col>

            <Col>
            <Label>Occupation</Label>
            <Label className="star">*</Label>
            <FormGroup>
              <Input
                    type="checkbox"
                    name="occupation" 
                    value="student"
                    checked={this.state.occupation === 'student'}
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
                    checked={this.state.occupation === 'employee'}
                    onChange={this.handleChange}/>
                    <Label>Employee
            </Label>
            </FormGroup>
            </Col>        
            <Input type="button" value="submit" onClick={this.validateForm} ></Input>
        </Form>
              <p id="errors"></p>
        </Container>
    </div>

    );
}
}
export default regForm;