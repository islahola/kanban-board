import React from 'react'
import '../sass/Board.scss'
import BoardTitle from "./BoardTitle"
import menu from "../assets/menu.png"
import Card from './Card'

const Board = ({data}) => {
    return (
        <div className="board">
        <div className="board__title"> 
            <BoardTitle id={data.id}  title={data.title}/>
            <div className="menu">
                <img src={menu} /> 
            </div>
        </div>         
        <div>
        {data.cards.map((card,index) =>
                  <Card key={card.id} index={index} id={data.id} item={card}/>
                )}
        </div>     
        <button>add</button> 
        </div>
    )
}
export default Board
