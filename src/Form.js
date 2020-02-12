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
            gender:'',
            city:'',
            occupation:'',
            hobbies: [],
            error:{
              fname:'',
              mname:'',
              lname:'',
              email:'',
              pwd:'',
              mobile:'',
              gender:'',
              city:'',
              occupation:'',
              hobbies: '',
            }

        }
    }

    handleChangeCheck = (e) =>{
      let {hobbies,error} =this.state;
      let {name,value,checked} =e.target;
      let index;
      if(checked){
        hobbies.push(value);
      }
      else{
        index=hobbies.indexOf(value)
        hobbies.splice(index,1)
      }
      this.setState({hobbies},
        ()=>{this.validateCheckField(hobbies,value) });
    }

    validateCheckField = (name, value) => {
      let {error} = this.state;
        if(name.length == 0) error.hobbies = "This Field Is Required"
        else error.hobbies="";
        this.setState({error})
    }

    handleChange = (e) =>{
      let {name, value,checked}= e.target
      this.setState({[name]: value}, 
        () => { this.validateField(name, value) });
        
      }
      validateField(fieldName, value) {
        let {error} = this.state; 

        switch(fieldName) {
          case 'fname':
            error.fname= (value === '')?"This Field Is Required":''
            break;
          
          case 'lname':
            error.lname= (value === '')?"This Field Is Required":''
            break; 

          case 'email':
            if(value=='')
            error.email="This Field Is Required"
            else
            error.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? '' : 'Email is invalid';
            break; 
           
            case 'pwd':
              if(value=='')
              error.pwd="This Field Is Required"
              else
              error.pwd = value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/i) ? '' : ' Email Invalid';
              break; 
              
            case 'mobile':
              if(value=='')
              error.mobile="This Field Is Required"
              else
              error.mobile = value.match(/^\d{10}$/) ? '' : 'Mobile is invalid';
              break;

              case 'occupation':
              if(value=='')
              error.occupation="This Field Is Required"
              else
              error.occupation = '';
              break;

              case 'city':
              if(value=='select')
              error.city="This Field Is Required"
              else
              error.city = '';
              break;

              case 'gender':
              if(value=='')
              error.gender="This Field Is Required"
              else
              error.gender = '';
              break;


            default:
              break;
        }
        this.setState({error});
      }


      handleSubmit = (e) =>{
        let {fname,mname,lname,email,pwd,mobile,gender,city,occupation,hobbies}=this.state
        const {error} =this.state
        if(fname == '' && lname==''&& email==''&& pwd==''&& mobile==''&& city==''&& hobbies==''){
        Object.keys(error).map((key)=>{
          error[key]="This Field Is Required"
        })
        this.setState({error:error})
        }
        else{
          this.setState(error)
        }

  }
    
    render(){
      let {error} = this.state;
    return(<div>
        
        <Container className="App">
        <center>
          <h1>FORM</h1>
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
                onChange={this.handleChange}
              />
              {error.fname && (
                  <span className="error">{error.fname}</span>
                )}
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
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
              {error.lname && (
                  <span className="error">{error.lname}</span>
                )}
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
                onChange={this.handleChange}
              />
              {error.email && (
                  <span className="error">{error.email}</span>
                )}
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
                onChange={this.handleChange}
              />
              {error.pwd && (
                  <span className="error">{error.pwd}</span>
                )}
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Mobile</Label>
              <Label className="star">*</Label>
              <Input
                type="number"
                name="mobile"
                id="mobile"
                onBlur={this.handleChange}
                onChange={this.handleChange}
              />
              {error.mobile && (
                  <span className="error">{error.mobile}</span>
                )}
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
            {error.gender && (
                  <span className="error">{error.gender}</span>
                )}
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
                    onChange={this.handleChangeCheck}
                    />
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
                    onChange={this.handleChangeCheck}
                    />
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
                    onChange={this.handleChangeCheck}
                    />
                    <Label>Cooking
            </Label>
            </FormGroup>
            {error.hobbies && (
                  <span className="error">{error.hobbies}</span>
                )}
            
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
              </select><br/>
              {error.city && (
                  <span className="error">{error.city}</span>
                )}
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
            {error.occupation && (
                  <span className="error">{error.occupation}</span>
                )}
            </Col>        
            <Input type="button" value="submit" onClick={this.handleSubmit} ></Input>
        </Form>
        </center>
        </Container>
    </div>

    );
}
}
export default regForm;