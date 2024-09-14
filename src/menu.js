import './menu.css'
import { useState } from 'react';


const pizzaData = [
    {
      id:1,
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "./pizza_assets/1.png",
      soldOut: false,
    },
    {
      id:2,
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "./pizza_assets/2.jpg",
      soldOut: false,
    },
    {
      id:3,
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "./pizza_assets/3.jpg",
      soldOut: false,
    },
    {
      id:4,
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "./pizza_assets/4.webp",
      soldOut: false,
    },
    {
      id:5,
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "./pizza_assets/5.jpg",
      soldOut: true,
    },
    {
      id:6,
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "./pizza_assets/6.jpg",
      soldOut: false,
    },
  ];

const Menu=()=>{
    return(
        <div>
            <br></br>
            <h4>OUR MENU</h4>
            <br></br>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from.All from our stone oven, all organic, all delicious.</p>
            <br></br>
            <br></br>
            {/* <Pizza name='Focaccia' ingredients='Bread with italian olive oil and rosemary' photoName='./pizza_assets/1.png' price='6' />
            <Pizza name='Pizza Margherita' ingredients='Tomato and mozarella' photoName='./pizza_assets/2.jpg' price='10' />
            <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='./pizza_assets/3.jpg' price='12' />
            <Pizza name='Pizza Funghi' ingredients='Tomato, mozarella, mushrooms, and onion' photoName='./pizza_assets/4.webp' price='12' />
            <Pizza name='Pizza Salamino' ingredients='Tomato, mozarella, and pepperoni' photoName='./pizza_assets/5.jpg' price='15' />
            <Pizza name='Pizza Prosciutto' ingredients='Tomato, mozarella, ham, aragula, and burrata cheese' photoName='./pizza_assets/6.jpg' price='18' /> */}
            
            {/* {pizzaData.map((list)=>(
                // <Pizza idName={list.idName} name={list.name} ingredients={list.ingredients} photoName={list.photoName} price={list.price} />
                <Pizza pizzaObj={list} />
            ))} */}
            <Pizza/>

        </div>
    )
}

const Pizza=(props)=>{
    console.log(props)
    const [step,setStep]=useState(1)
    const[isOpen,setIsOpen]=useState(true)

    const handlePrevious=()=>{
        if(step>1)
        setStep(step-1)
    }
    const handleNext=()=>{
        if(step<6)
        setStep(step+1)
    }
    return(
        <div className='Main'>
            {/* <div className="focc">
                <img src={props.pizzaObj.photoName} alt=""></img>
                <div className="focca">
                    <h3>{props.pizzaObj.name}</h3>
                    <p>{props.pizzaObj.ingredients}</p>
                    <span>{props.pizzaObj.price}</span>
                </div>
            </div> */}

             <button className='close' onClick={()=>setIsOpen(!isOpen)}>&times;</button>
             {isOpen && (<div className='steps'>
                 <div className='numbers'>
                 <div className={step === 1 ?"active":""}>1</div>
                 <div className={step === 2 ?"active":""}>2</div>
                 <div className={step === 3 ?"active":""}>3</div>
                 <div className={step === 4 ?"active":""}>4</div>
                 <div className={step === 5 ?"active":""}>5</div>
                 <div className={step === 6 ?"active":""}>6</div>
                 </div>
                 <img src={pizzaData[step-1].photoName} alt="" className={pizzaData[step-1].soldOut === true ? "grey": ""}></img>
                 <div className='focca'>
                     <h3 className={pizzaData.soldOut === true ? "grey": ""}>{pizzaData[step-1].name}</h3>
                     <p className={pizzaData.soldOut === true ? "grey": ""}>{pizzaData[step-1].ingredients}</p>
                    <span className={pizzaData.soldOut === true ? "grey": ""}>{pizzaData[step-1].price}</span>
                 </div>

                 <div className='buttons'>
                <button className='prev' onClick={handlePrevious}>Previous</button>
                 <button className='nex' onClick={handleNext}>Next</button>
                 </div>
             </div>)}
            {/* <div className='pizz'>
                <img src='./pizza_assets/2.jpg' alt=""></img>
                <div className='pizza'>
                    <h3>Pizza Salomina</h3>
                    <p>Tomato,Mozarella and Pepperoni</p>
                    <span>10</span>
                </div>
            </div>
            <div className='pro'>
                <img src='./pizza_assets/3.jpg' alt=""></img>
                <div className='pros'>
                    <h3>Pizza Prosciutto</h3>
                    <p>Tomoto and Mozarella</p>
                    <span>12</span>
                </div>
            </div>
            <div className='spi'>
                <img src='./pizza_assets/4.webp' alt=""></img>
                <div className='spin'>
                    <h3>Pizza Spinaci</h3>
                    <p>Tomato,Mozarella,Spinach <br></br> and Ricotta Cheese</p>
                    <span>12</span>
                </div>
            </div>
            <div className='mar'>
                <img src='./pizza_assets/5.jpg' alt=""></img>
                <div className='marg'>
                    <h3>Pizza Margheritti</h3>
                    <p>Tomato,Mozarella,Mushrooms and Onion</p>
                    <span>SOLD OUT</span>
                </div>
            </div>
            <div className='fun'>
                <img src='./pizza_assets/6.jpg' alt=""></img>
                <div className='fung'>
                    <h3>Pizza Funghi</h3>
                    <p>Tomato,Mozarella and Burrata <br></br>Cheese</p>
                    <span>18</span>
                </div>
            </div> */}
        </div>
    )
}

export default Menu