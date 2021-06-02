import React from 'react'
import '../sass/Board.scss'
import BoardTitle from "./BoardTitle"
import menu from "../assets/menu.png"
import Card from './Card'
import Button from './Button'
import { Droppable,Draggable } from 'react-beautiful-dnd'

const Board = ({data,index}) => {
    return (
        <Draggable draggableId={data.id} index = {index}>
            {(provided)=>(
                <div 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="board"
                >
                <div className="board__title"> 
                    <BoardTitle id={data.id}  title={data.title}/>
                    <div className="menu">
                        <img src={menu} /> 
                    </div>
                </div> 
                <Droppable>
                {(provided)=>(
                    <div 
                    ref ={provided.innerRef}
                    {...provided.droppableProps}>
                    {data.cards.map((card,index) =>
                            <Card key={card.id} index={index} id={data.id} item={card}/>
                            )}
                    {provided.placeholder}
                    </div>  
                )}
                </Droppable>  
                <Button id={data.id} />
            </div>
            )}
        </Draggable>
    )
}
export default Board
