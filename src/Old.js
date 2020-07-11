// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const fill = {
//     p1: `Thats not what i saw in my head at all theres all this spanish text on my site.
//         Can it be more retro we are a non-profit organization, but what is a hamburger menu. 
//         Can you use a high definition screenshot can it be more retro we need to make the new version clean and sexy could you rotate the picture to show the other side of the room?
//         For could you rotate the picture to show the other side of the room? and i love it, but can you invert all colors?.`,
    
//     p2: `Give us a complimentary logo along with the website make it sexy, for can you make it stand out more?
//     and something summery; colourful, so make the font bigger make it original we exceed the clients' expectations
//     Was i smoking crack when i sent this?
//     hahaha! can we have another option i was wondering if my cat could be placed over the logo in the flyer in an ideal world for will royalties in the company do instead of cash make the font bigger I want you to take it to the next level.`,
    
//     p3: `I know somebody who can do this for a reasonable cost i cant pay you thats not what i saw in my head at all, can you lower the price for the website?
//     Make it high quality and please use html can you make the font a bit bigger and change it to times new roman?
//     Jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site`,
// }

// class Nav extends React.Component {
//     render() {
//         return (
//             <div class="nav">
//                 <h1>React Website</h1>
//                 <button>Transitions</button>
//             </div>
//         )
//     }
// }

// class Body extends React.Component {
//     render() {
//         if(this.props.fill === fill.p1) {
//             return (
//                 <div class="bodyTop">
//                     <p>
//                         {this.props.fill}
//                     </p>
//                 </div>
//             )
//         } else {
//             return (
//                 <div class="body">
//                     <p>
//                         {this.props.fill}
//                     </p>
//                 </div>
//             )
//         }
        
//     }
// }

// class Shop extends React.Component {
//     render() {
//         return (
//             <div class="site">
//                 <Nav/>
//                 <Body fill={fill.p1}/>
//                 <Body fill={fill.p2}/>
//                 <Body fill={fill.p3}/>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Shop />, document.getElementById('root'));