import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import './Bisection.css';


const mainDiv = {
    display:"flex",
    width:"100%",
    margin:"0 auto",
    
}

const Div = {
    width:"100%",
    margin:"0 auto"
}

class Newton extends Component{

    Cal_interpolate(){
        var x =[0,20000,40000,60000,80000];
        var y = [9.8100,9.7487,9.6879,9.6879,9.5682] ;
        var arr_c = [];
        var arr_c1 = [];
        var arr_c2 = [];
        const xvalue = 42235;
        var solution = 0;
        var Linear_ans;
        var Quadratic_ans;
        var term = 1;
        var start = document.getElementById("Inputxstart").value;
        var end = document.getElementById("Inputxend").value;

        var s = Number(start);
        var e = Number(end);

        if(e !== 0 || s !== 0){
            // part Linear
            const Linear_cal = () =>{
                arr_c[0] = y[0];
                arr_c[1] = (y[4] - y[0]) / (x[4] - x[0]);
            };
            Linear_cal();
            Linear_ans = arr_c[0] + arr_c[1]*(42235 - x[0]);
            document.getElementById("Linear").innerHTML=Linear_ans;

            // part Quadratic
            const Quadratic_cal = () =>{
                arr_c1[0] = y[0];
                arr_c1[1] = (y[2] - y[0]) / (x[2] - x[0]);
                arr_c1[2] = ((y[2] - y[0]) / (x[2] - x[0]) - arr_c[1]) / (x[4] - x[0]);
            };
            Quadratic_cal();
            Quadratic_ans = arr_c1[0] + arr_c1[1]*(42235 - x[0]) + arr_c1[2]*(42235 - x[0])*(42235 - x[2]);
            document.getElementById("Quadratic").innerHTML=Quadratic_ans;

            // part Polynomial
            const interpolate = (start, end) =>{
                if((end - start) === 1){
                    return (y[end] - y[start]) / (x[end] - x[start]);
                }
                else if(end === start){
                    return y[end];
                }
                else{
                    return (interpolate(start+1, end) - interpolate(start, end-1)) / (x[end] - x[start]);
                }
            }


            const save_c = (start,end) =>{
                for(let i = start; i<=end; i++){
                    arr_c2[i] = interpolate(start, i);
                }
            };

            save_c(s,e);
        
            for(let i = 0; i<arr_c2.length; i++){
                if(i === 0){
                    solution += arr_c2[i];
                }
                else{
                    term *= (xvalue - x[i-1]);
                    solution += arr_c2[i]*term;
                }
            }

            document.getElementById("Polynomial").innerHTML=solution;
        }
    }

    render(){
        return(
            <div>
               <div style={mainDiv}>
                   <div  style={Div} >
                   <div class="head1" style={{width:"30%",margin:"0 auto"}}>
                        <h1> Newton Interpolation </h1></div>
                        <br></br>

                            <div className="box">
                                <Form.Control id="start" type="number" placeholder="start" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                                <br></br>
                                <Form.Control id="end" type="number" placeholder="end" style={{width:"30%",margin:"0 auto"}}></Form.Control>
                            </div>
                            <br>
                            </br>

                            <div class="box">
                            <Button onClick={this.getValue}  style={{width:"15%",margin:"0 auto"}} >
                                    done
                            </Button></div>
                    
                    
                            <br></br><br></br><br></br>

                            <div style={{width:"30%",height:"18%",margin:"0 auto"}}>
                                <h>Linear = </h>
                                <h style={{color:'back'}} id="Linear">  </h>
                                <br/>
                                <h>Quadratic = </h>
                                <h style={{color:'back'}} id="Quadratic">  </h>
                                <br/>
                                <h>Polynomial = </h>
                                <h style={{color:'back'}} id="Polynomial">  </h>
                            </div>
                        

                    </div>
                </div>
            </div>
            
        );
    }

}

export default Newton;