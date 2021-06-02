import React , { useContext } from 'react'
import '../sass/Button.scss'
import Textarea from 'react-textarea-autosize'
import { DataContext } from "../context/store"
import cancel from "../assets/cancel.svg"

const Button = ({list,id}) => {
    const [open,setOpen] = React.useState(false)
    const { addCard , addList} = useContext(DataContext)
    const [text, setText] = React.useState("")
    const openForm = () => setOpen(true)
    const closeForm = () =>setOpen(false)
    const handleChange = e => setText(e.target.value)
    const addCards = () =>{
        if(text){
            addCard(id,text)
        }
        setText("")
    }
    const addLists = () =>{
        if(text){
            addList(text)
        }
        setText("")
    }
    const textBtn = list ? "add list" : "add card"
    const showForm = () =>{
        const textPlac = list ? "Enter List Title" : "Enter Card Title"
        return(
            <div className="form-text">
                <Textarea 
                    className="text-area"
                    onBlur={closeForm}
                    placeholder={textPlac}
                    autoFocus
                    value={text}
                    onChange={handleChange}
                />
                <button onMouseDown= {list ? addLists : addCards} className="add">{textBtn}</button>
                <button onClick={closeForm} className="cancel">
                    <img src={cancel} alt="close"/>
                </button>
            </div>
        )
    }
    const showButton = () =>{
        const text = list ? "add anoter list" : "add new card"
        const opacityBtn = list ? 1 : 0.5
        const colorBtn = list ? "#fff" : "inherit"
        const backgroundBtn =list ? "rgba(0,0,0,0.25)" : "inherit"
        return(
            <div className="add-button" onClick={openForm} style={{
                opacity: opacityBtn,
                color: colorBtn,
                background: backgroundBtn,
            }}>+ {text}</div>
        )
    }
    return open ? showForm() : showButton()
}

export default Button
