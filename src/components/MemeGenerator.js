import React from 'react'
import './MemeGenerator.css'

class MemeGenerator extends React.Component {
   constructor() {
      super()
      this.state = {
         topText: "",
         middleText: "",
         bottomText: "",
         top1: "",
         top2: "",
         top3: "",
         left1: "",
         left2: "",
         left3: "",
         color1: "#000000",
         color2: "#000000",
         color3: "#000000",
         size1: "",
         size2: "",
         size3: "",
         randomImage: "",
         memeImages: []
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
   }

   componentDidMount() {
      fetch("https://api.imgflip.com/get_memes")
         .then(response => response.json())
         .then(datas => {
            this.setState({
               memeImages: datas.data.memes
            })
         })
   }

   handleChange(event){
      const {value, name} = event.target
      this.setState({
         [name]: value
      })
   }

   handleClick(event){
      event.preventDefault()
      const random = parseInt((Math.random() * this.state.memeImages.length))
      const randomMeme = this.state.memeImages[random].url
      this.setState({
         randomImage: randomMeme
      })
   }

   render() {
      const styles = {
         styles1: {
            position: "absolute",
            top: `${this.state.top1}px`,
            left: `${this.state.left1}px`,
            color: this.state.color1,
            fontSize: `${this.state.size1}px`
         },
         styles2: {
            position: "absolute",
            top: `${this.state.top2}px`,
            left: `${this.state.left2}px`,
            color: this.state.color2,
            fontSize: `${this.state.size2}px`
         },
         styles3: {
            position: "absolute",
            top: `${this.state.top3}px`,
            left: `${this.state.left3}px`,
            color: this.state.color3,
            fontSize: `${this.state.size3}px`
         }
      }
      const {styles1, styles2, styles3} = styles
      return(
         <div>
            <form className="text-form">
               <input
                  className="text1"
                  type="text"
                  placeholder="Top Text"
                  name="topText"
                  value={this.state.topText}
                  onChange={this.handleChange}
               />
               <input
                  placeholder="from top"
                  type="number"
                  step="5"
                  name="top1"
                  value={this.state.top1}
                  onChange={this.handleChange}
               />
               <input
                  placeholder="from left"
                  type="number"
                  step="5"
                  name="left1"
                  value={this.state.left1}
                  onChange={this.handleChange}
               />    
               <input
                  placeholder="font size"
                  type="number"
                  step="2"
                  name="size1"
                  value={this.state.size1}
                  onChange={this.handleChange}
               />  
               <input
                  type="color"
                  name="color1"
                  value={this.state.color1}
                  onChange={this.handleChange}
               /> 
               <button className="submit" onClick={this.handleClick}>Generate</button>     
               <input
                  className="text2"
                  type="text"
                  placeholder="Midddle Text"
                  name="middleText"
                  value={this.state.middleText}
                  onChange={this.handleChange}
               />
               <input
                  placeholder="from top"
                  type="number"
                  name="top2"
                  step="5"
                  value={this.state.top2}
                  onChange={this.handleChange}
               />
               <input
                  placeholder="from left"
                  type="number"
                  step="5"                  
                  name="left2"
                  value={this.state.left2}
                  onChange={this.handleChange}
               /> 
               <input
                  placeholder="font size"
                  type="number"
                  step="2"
                  name="size2"
                  value={this.state.size2}
                  onChange={this.handleChange}
               />  
               <input
                  type="color"
                  name="color2"
                  value={this.state.color2}
                  onChange={this.handleChange}
               />  
               <input
                  className="text3"
                  type="text"
                  placeholder="Bottom Text"
                  name="bottomText"
                  value={this.state.bottomText}
                  onChange={this.handleChange}
               />
               <input
                  placeholder="from top"
                  type="number"
                  step="5"
                  name="top3"
                  value={this.state.top3}
                  onChange={this.handleChange}
               />
               <input
                  placeholder="from left"
                  type="number"
                  step="5"
                  name="left3"
                  value={this.state.left3}
                  onChange={this.handleChange}
               />    
               <input
                  placeholder="font size"
                  type="number"
                  step="2"
                  name="size3"
                  value={this.state.size3}
                  onChange={this.handleChange}
               />  
               <input
                  type="color"
                  name="color3"
                  value={this.state.color3}
                  onChange={this.handleChange}
               />        
            </form>
            <div className="meme-container">
               <img src={this.state.randomImage} alt="Meme" />
               <h1 style={styles1} className="h1">{this.state.topText}</h1>
               <h1 style={styles2} className="h2">{this.state.middleText}</h1>
               <h1 style={styles3} className="h2">{this.state.bottomText}</h1>
            </div>
         </div>
      )
   }
}

export default MemeGenerator

// import React, { Component } from "react";

// class MemeGenerator extends Component {
//    constructor() {
//       super()
//       this.state = {
//          xoffset1: 0,
//          yoffset1: 0,
//          xoffset2: 0,
//          yoffset2: 0,
//          delta: 20,
//          header: ""
//       }
//       let xoffset = ""
//       let yoffset = ""

//      // this.handleChange = this.handleChange.bind(this)
//       this.handleOnClick = this.handleOnClick.bind(this)
//    }

// // Create state


// handleOnClick(event){
//    const {id} = event.target
//    this.setState({
//       header: id
//    })
//    }
// }

// moveTitleToDown1 = () => {
//    this.state.header==="one"
//    ?
// 	this.setState(
// 	{ yoffset1: this.state.yoffset1
// 		+ this.state.delta })
//    :
//    this.setState(
//    { yoffset2: this.state.yoffset2
//       + this.state.delta })
// };

// moveTitleToRight1 = () => {
//    this.state.header==="one"
//    ?
// 	this.setState(
// 	{ xoffset1: this.state.xoffset1
// 		+ this.state.delta })
//    :
//    this.setState(
//    { xoffset2: this.state.xoffset2
//       + this.state.delta })
// };

// moveTitleToLeft1 = () => {
//    this.state.header==="one"
//    ?
// 	this.setState(
// 	{ xoffset1: this.state.xoffset1
// 		- this.state.delta })
//    :
//    this.setState(
//    { xoffset2: this.state.xoffset2
//       - this.state.delta })
// };

// moveTitleToUp1 = () => {
//    this.state.header==="one"
//    ?
// 	this.setState(
// 	{ yoffset1: this.state.yoffset1
// 		- this.state.delta })
//    :
//    this.setState(
//    { yoffset2: this.state.yoffset2
//       - this.state.delta })
// };

// render() {
// 	return (
// 	<div>
// 		{/* Element to Move Dynamically */}
// 		<h2
//       id="one"
//       onclick={this.handleOnClick}
// 		style={{
// 			position: "absolute",
// 			left: `${this.state.xoffset1}px`,
// 			top: `${this.state.yoffset1}px`,
// 		}}
// 		>
// 		GeeksforGeeks
// 		</h2>
//       <h2
//       id="two"
//       onclick={this.handleOnClick}
// 		style={{
// 			position: "absolute",
// 			left: `${this.state.xoffset2}px`,
// 			top: `${this.state.yoffset2}px`,
// 		}}
// 		>
// 		Hey buddy
// 		</h2>

// 		{/* Move Controls */}
// 		<div style={{ marginTop: "80px" }}>
// 		<button onClick={this.moveTitleToRight}>
// 			Move Title To Right
// 		</button>
// 		<button onClick={this.moveTitleToDown}>
// 			Move Title To Down
// 		</button>
// 		<button onClick={this.moveTitleToLeft}>
// 			Move Title To Left
// 		</button>
// 		<button onClick={this.moveTitleToUp}>
// 			Move Title To Up
// 		</button>
// 		</div>
// 	</div>
// 	);
// }


// export default MemeGenerator;
