import React, {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {logoutUser} from 'C:\\Users\\함수림\\pompay2\\pompay_paran\\client\\src\\_actions\\user_actions.js';
import {useDispatch} from 'react-redux';
import {InfoUser} from 'C:\\Users\\함수림\\pompay2\\pompay_paran\\client\\src\\_actions\\user_actions.js';
import Footer from 'C:\\Users\\함수림\\pompay2\\pompay_paran\\client\\src\\components\\views\\Footer\\Footer.js';
import axios from 'axios';

 
function LandingPage(){
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [Name, setName] = useState("")
    const [code, setCode] = useState("")
    const [major, setMajor] = useState("")
    const [score, setScore] = useState("")
    const [certi, setCerti] = useState("")
    const [multimajor, setMultimajor] = useState("")
    const [club, setClub] = useState("")
    const [clubinfo, setClubinfo] = useState("")
    const [jdata, setJdata] = useState([])
    const onNameHandler=(event)=>{
      setName(event.currentTarget.value)
    }
    const onCodeHandler=(event)=>{
        setCode(event.currentTarget.value)
    }
    const onMajorHandler=(event)=>{
        setMajor(event.currentTarget.value)
    }
    const onScoreHandler=(event)=>{
        setScore(event.currentTarget.value)
    }
    const onCertiHandler=(event)=>{
        setCerti(event.currentTarget.value)
    }
    const onMultimajorHandler=(event)=>{
        setMultimajor(event.currentTarget.value)
    }
    const onClubHandler=(event)=>{
        setClub(event.currentTarget.value)
    }
    const onClubinfoHandler=(event)=>{
        setClubinfo(event.currentTarget.value)
    }
    function Component(){
        useEffect(()=>{
            axios
                .get('http://localhost:3000/info')
                .then((res)=>{
                    setJdata(...jdata,...res.data);
                })
                .catch(()=>{
                    console.log("fail");
                });
        },[]);
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault();
  
        let body={
            name: Name,
            code: code,
            major: major,
            score: score,
            certi: certi,
            multimajor: multimajor,
            club:club,
            club:clubinfo,
        }
        dispatch(InfoUser(body))
          .then(response=>{
              if(response.payload.success){
                  navigate('/')
              }else{
                  alert('Failed to  save')
              }
          })
    }
    const onClickHandler=()=>{
        dispatch(logoutUser())
        .then((response)=>{
            console.log(response);
            if(response.payload.success){
                navigate('/login')
            }else{
                alert('Failed to logout!')
            }
        }).catch((err)=>console.log(err))
    }
    return (
        <div style={{
                    width: '100%',
                    height:'100vh'}}>
            <div style={{widht:'100%', height:'50px',flexDirection:'column'}}>
            <h1>POMPAY</h1>
            <button style={{width: "100px",height:"40px"}} onClick={onClickHandler}>
                로그아웃
            </button>
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center', 
                width: '460px', 
                backgroundColor:'#ffffff', 
                height:'400px',
                borderRadius:'20px'}}>
                    <div >
                <form style={{display:'flex', flexDirection:'column',justifyContent: 'center', alignItems:'center'}}
                    onSubmit={onSubmitHandler}>
                    <h1>Graduation Information</h1>
                    <div>
                        <label >이름</label>
                        <input  type="text" value={Name} onChange={onNameHandler} placeholder="ex) 홍길동"/>
                    </div>
                    <div >
                        <label >학번</label>
                        <input type="text" value={code} onChange={onCodeHandler}  placeholder="ex) 202021567" />
                    </div>
                    <div>
                        <label >학과</label>
                        <input  type="text" value={major} onChange={onMajorHandler}  placeholder="ex) 금융공학과" />
                    </div>
                
                    <div>
                        <label >학점</label>
                        <input  type="text" value={score} onChange={onScoreHandler}  placeholder="ex) 4.xx" />
                    </div>
                    <div>
                        <label >자격증</label>
                        <input  type="text" value={certi} onChange={onCertiHandler} placeholder="ex) CPA"/>
                    </div>
                    <div>
                        <label>복수전공</label>
                        <input  type="text" value={multimajor} onChange={onMultimajorHandler} placeholder="ex) 소프트웨어학과"/>
                    </div>
                    <div >
                        <label>동아리</label>
                        <input type="text" value={club} onChange={onClubHandler}  placeholder="ex) 동아리명"/>
                    </div>
                    <div >
                        <label>동아리 활동 내용</label>
                        <input type="text" value={clubinfo} onChange={onClubinfoHandler} />
                    </div>
                    <button type="submit" >Summit</button>
                </form>
                </div>
                <Component></Component>
            </div>
           
         <Footer></Footer>
    </div>              
    )
}

export default LandingPage