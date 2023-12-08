import React from 'react';
import fblogo from './fb.svg';
import googlelogo from './google.svg';
import githublogo from './github.svg';
import {Styles} from './Style';

const InputStyle = {outline: "0",background: "#f2f2f2",width: "100%",border: "0",margin: "0 0 15px",padding: "15px",boxSizing: "border-box",fontSize: "14px",fontFamily: "'Poppins', sans-serif",};
const DivStyle = { display: "flex", flexDirection: "column", margin: "auto"};
const P1 = {fontSize: "14px", color: "blue", alignSelf: "flex-end", margin: "2px 0 0 auto"};
const P2 = {fontSize: "14px", color: "gray", };
const P3 = {fontSize: "14px", color: "gray", marginTop:"20px"};
const Aspan = { fontSize: "14px", color: "green"};
const ButtonStyle = {border: "0",margin: "35px 0 15px",width: "100%",padding: "15px",boxSizing: "border-box",background: "black",color: "White",fontSize: "18px",transition: "background 0.3s, color 0.3s", cursor: "pointer",":hover": {background: "green",color: "black",} } ;


const Styling = () => (
  <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer"/>

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,700;0,800;0,900;1,900&display=swap" rel="stylesheet"/>

    <div style={{ width: "450px", padding: "6% 0 0", margin: "auto" }}>
      <h2 style={{margin:"10px", textAlign:"center"}}>Inline-Object-Component styling</h2>
      <div style={{
        position: "relative",
        zIndex: "1x",
        background: "#FFFFFF",
        maxWidth: "360px",
        // margin: "0 auto 100px",
        padding: "45px",
        textAlign: "center",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
        fontFamily: "'Poppins', sans-serif",
      }}>

        <h2 style={{ fontFamily: "'Poppins', sans-serif",}}>LOG IN</h2>
        <br />

        <form>
          <input type="email" placeholder="Enter Email" style={InputStyle}/>
          <input type="password" placeholder="Enter Password" style={InputStyle}/>
          <div style={DivStyle}>
              <p style={P1}>Forgot Password?</p>
          </div>
          <button style={ButtonStyle}>Log In</button>

          <p style={Styles.P2}>Or log in with</p>
          <div style={Styles.AppIconStyle}>
              <img src={fblogo} alt="Logo" style={Styles.Fbstyle} />
              <img src={googlelogo} alt="Logo" style={Styles.GoogleStyle} />
              <img src={githublogo} alt="Logo" style={Styles.GitStyle} />
          </div>
          <br/>
          <p style={Styles.P3}>Don't have an Account? <span><a href='#' style={Styles.Aspan}>Sign UP</a></span></p>
        </form>
      </div>
    </div>
  </>
)

export default Styling;
