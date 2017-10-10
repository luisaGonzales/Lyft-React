import React, { Component } from 'react';
import componente1 from './componente1.js';
import './componente1.css';
class validation extends Component {
    constructor(props) {
      super(props);
      this.inputValue = undefined;
    }
    validationOne() {
      alert('df');
    }
  }
class SignUp extends Component {
    render() {
      return <div>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="fluid-container text-center">
                  <form onSubmit={e => {
                    e.preventDefault();
                    validation.validationOne();
                    }} className="form-horizontal">
                    <h2>
                      {" "}<b>
                        <a href /> Sign up
                      </b>
                    </h2>
                    <p>We'll send a text to verify your phone</p>
                    <hr />
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-user" />
                      </span>
  
                      <input title="Coloca tu nombre" id="name" type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <br />
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-envelope" />
                      </span>
                      <input title="Coloca tu e-mail" id="email" type="email" className="form-control" name="email" placeholder="Correo" />
                    </div>
                    <br />
                    <div className="list-group-item">
                      I agree to Lyfts
                      <font color="blue">Terms of service</font> <br />
                      <input onChange={e => (validation.inputValue = e.target.value)} id="someSwitchOptionSuccess" name="someSwitchOption001" type="checkbox" disabled />
                      
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <p className=" text-center">Join now for free ride credit</p>
          <a id="next" className="btn btn-info btn-block" href="" disabled>
            NEXT
          </a>
          <div id="nextDiv1" />
        </div>;
    }
  }
  export default SignUp