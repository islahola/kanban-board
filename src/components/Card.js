import React, { useContext }from 'react'
import { DataContext } from "../context/store"
import delIcon from "../assets/delete.png"
import '../sass/Card.scss'
import { Draggable } from 'react-beautiful-dnd'

const Card = ({item,id,index}) => {
    const { cardDelete,editCard } = useContext(DataContext)
    const [edit,setEdit]= React.useState(false)
    const [text,setText] = React.useState(item.title)
    const isEdit = () => setEdit(true)
    const handleChange = e => setText(e.target.value)
    const closeEdit = () => {
        editCard(id,item.id,index,text)
        setEdit(false)
    }
    const del = () => {
        cardDelete(id,item.id)
    }
    return (
        <Draggable draggableId={item.id} index = {index}>
            {(provided)=>(
            <div 
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="card-list"
            >
            { edit ?(
                    <form onSubmit={closeEdit}>
                        <input
                            autoFocus
                            value={text}
                            onBlur={closeEdit}
                            onChange={handleChange}
                            type="text"
                        />
                    </form>
            ) : (
                <div className="card-list__text">
                    <p onClick={isEdit}>{item.title}</p>
                    <img src={delIcon} onClick={del}/>
                </div>
                )}
            </div>
            )}
        </Draggable>
    )
}

export default Card
