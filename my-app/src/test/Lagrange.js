import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import './Bisection.css';

const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto"
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class Lagrange extends Component{
    constructor(){
        super();
        let i = 0;
        
    }

    Cal_Linear_interpolate(){
        var x =[0,20000,40000,60000,80000];
        var y = [9.8100,9.7487,9.6879,9.6879,9.5682] ;
        var xvalue = 42235;
        var Linear_L = [];
        var Linear_ans;
        var start = document.getElementById("Linearinputp1").value;
        var end = document.getElementById("Linearinputp2").value;
        var p1 = Number(start);
        var p2 = Number(end);

        if(p1 !== 0 || p2 !== 0){
            const Linear_cal = (p1,p2) =>{
                Linear_L[0] = ((x[p2] - xvalue) / (x[p2] - x[p1])) * y[p1];
                Linear_L[1] = ((x[p1] - xvalue) / (x[p1] - x[p2])) * y[p2];
                Linear_ans = Linear_L[0] + Linear_L[1];
            }
            Linear_cal(p1,p2);
            document.getElementById("Linear").innerHTML=Linear_ans;
        }
    }

    Cal_Quadtic_interpolate(){
        var x =[0,20000,40000,60000,80000];
        var y = [9.8100,9.7487,9.6879,9.6879,9.5682] ;
        var xvalue = 42235;
        var Quadratic_L = [];
        var Quadratic_ans;
        var x1 = document.getElementById("Quadticinputp1").value;
        var x2 = document.getElementById("Quadticinputp2").value;
        var x3 = document.getElementById("Quadticinputp3").value;
        var p1 = Number(x1);
        var p2 = Number(x2);
        var p3 = Number(x3);

        if(p2 > p1 && p3 > p2){ // input 1 , 2 , 3
            const Quadratic_cal = (p1,p2,p3) =>{
                Quadratic_L[0] = ((x[p2] - xvalue) / (x[p2] - x[p1]) * (x[p3] - xvalue) / (x[p3] - x[p1])) * y[p1];
                Quadratic_L[1] = ((x[p1] - xvalue) / (x[p1] - x[p2]) * (x[p3] - xvalue) / (x[p3] - x[p2])) * y[p2];
                Quadratic_L[2] = ((x[p1] - xvalue) / (x[p1] - x[p3]) * (x[p2] - xvalue) / (x[p2] - x[p3])) * y[p3];
                Quadratic_ans = Quadratic_L[0] + Quadratic_L[1] + Quadratic_L[2];
            }
            Quadratic_cal(p1,p2,p3);
            document.getElementById("Quadratic").innerHTML=Quadratic_ans;
        }
    }

    Cal_Polynomial_interpolate(){
        var x =[0,20000,40000,60000,80000];
        var y = [9.8100,9.7487,9.6879,9.6879,9.5682] ;
        var xvalue = 42235;
        var Polynomial_L = [];
        var Polynomial_ans = 0;
        var start = document.getElementById("Polynomialinputstart").value;
        var end = document.getElementById("Polynomialinputend").value;
        var s = Number(start);
        var e = Number(end);

        if(s !== 0 || e !== 0){
            const Polynomial_cal = (start, end) =>{
                const n = end - start;

                for(let i = start; i<=n; i++){
                    var term = 1;
                    for(let j = start; j<=n; j++){
                        if(j === i){
                            continue;
                        }
                        term *= (x[j] - xvalue) / (x[j] - x[i]);
                    }
                    Polynomial_L[i] = term * y[i];
                }
                for(let i = 0; i<=n; i++){
                    Polynomial_ans += Polynomial_L[i];
                }
            }
            Polynomial_cal(s,e);
            document.getElementById("Polynomial").innerHTML=Polynomial_ans;
        }
    }

    render(){
        
        return(
            <div>
                <div style={mainDiv}>
                    <div style={Div}>
                    <div class="head1" style={{width:"30%",margin:"0 auto"}}>
                        <h1>Lagrange Interpolation</h1>
                        </div>
                        <br/>

                        <div className="box">
                            
                            
                            <h style={{color:'back'}} id="arrx">  </h>
                        </div>

                        <br/>

                        <div className="box">
                            <Form.Control id="Linearinputp1" type="number" placeholder="x1" style={{width:"30%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="Linearinputp2" type="number" placeholder="x2" style={{width:"30%", margin:"0 auto"}}></Form.Control>
                            <br/><br/>
                        </div>
                        <div className="box">
                            <Button onClick={this.Cal_Linear_interpolate} style={{width:"15%", margin:"0 auto"}}>
                                done
                            </Button>
                            <br/><br/>

                            <h>Linear = </h>
                            <h style={{color:'back'}} id="Linear">  </h>
                        </div>

                       

                        <br/><br/>

                        <div className="box">
                            <Form.Control id="Quadticinputp1" type="number" placeholder="x1" style={{width:"30%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="Quadticinputp2" type="number" placeholder="x2" style={{width:"30%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="Quadticinputp3" type="number" placeholder="x3" style={{width:"30%", margin:"0 auto"}}></Form.Control>
                            <br/><br/>
                        </div>
                        <div className="box">
                            <Button onClick={this.Cal_Quadtic_interpolate} style={{width:"15%", margin:"0 auto"}}>
                                done
                            </Button>
                            <br/><br/>

                            <h>Quadratic = </h>
                            <h style={{color:'back'}} id="Quadratic">  </h>
                        </div>
                        
                        <br/><br/>

                        <div className="box">
                            <Form.Control id="Polynomialinputstart" type="number" placeholder="xstart" style={{width:"30%", margin:"0 auto"}}></Form.Control>
                            <br/>
                            <Form.Control id="Polynomialinputend" type="number" placeholder="xend" style={{width:"30%", margin:"0 auto"}}></Form.Control>
                            <br/><br/>
                        </div>
                        <div className="box">
                            <Button onClick={this.Cal_Polynomial_interpolate} style={{width:"15%", margin:"0 auto"}}>
                                done
                            </Button>
                            <br/><br/>

                            <h>Polynomial = </h>
                            <h style={{color:'back'}} id="Polynomial">  </h>
                        </div>

                        <br/><br/>

                    
                    </div>
                </div>
            </div>
        );
    }
}

export default Lagrange;