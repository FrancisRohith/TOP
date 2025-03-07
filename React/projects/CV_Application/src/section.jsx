import { useState } from 'react'
import './section.css'

function Section1(){
    const [view,setView] = useState('edit')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    function handleName(e){
        setName(e.target.value)
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }
    function handlePhone(e){
        setPhone(e.target.value)
    }
    function toggleView(){
        if(view=='edit') {setView('submit')}
        else{setView('edit')}

    }
    if(view=='edit'){
        return(
            <>
            <label htmlFor="general-edit">General Information:</label>
            <section id="general-edit">
                <Input label="Name" value={name} onChange={handleName}/>
                <Input label="Email" value={email} onChange={handleEmail} type='email'/>
                <Input label="Phone" value={phone} onChange={handlePhone} type='number'/>
                <button onClick={toggleView}>Submit</button>
            </section>
            </>
        )
    }else{
        return(
            <>
                <label htmlFor="general-submit">General Information:</label>
                <section class='general-submit'>
                    <List label='Name:' value={name}/>
                    <List label='Email:' value={email}/>
                    <List label='Phone:' value={phone}/>
                    <button onClick={toggleView}>Edit</button>
                </section>
            </>
        )
    }
    
}

function Section2(){
    const [view,setView] = useState('edit')
    const [schoolName,setschoolName] = useState('')
    const [education,setEducation] = useState('')
    const [date,setDate] = useState('')
    function handleschoolName(e){
        setschoolName(e.target.value)
    }
    function handleEducation(e){
        setEducation(e.target.value)
    }
    function handleDate(e){
        setDate(e.target.value)
    }
    function toggleView(){
        if(view=='edit') {setView('submit')}
        else{setView('edit')}

    }
    if(view=='edit'){
        return(
            <>
            <label htmlFor="education-edit">Practical Experience:</label>
            <section className="education-edit">
                <Input label="School name" value={schoolName} onChange={handleschoolName}/>
                <Input label="Highest education" value={education} onChange={handleEducation} />
                <Input label="Date of completion" value={date} onChange={handleDate} type='date'/>
                <button onClick={toggleView}>Submit</button>
            </section>
            </>
        )
    }else{
        return(
            <>
                <label htmlFor="education-submit">Practical Experience:</label>
                <section class='education-submit'>
                    <List label='School name:' value={schoolName}/>
                    <List label='Highest education:' value={education}/>
                    <List label='Date of completion:' value={date}/>
                    <button onClick={toggleView}>Edit</button>
                </section>
            </>
        )
    }
    
}

function Section3(){
    const [experienceView,setView] = useState('edit')
    const [companyName,setcompanyName] = useState('')
    const [position,setPosition] = useState('')
    const [startDate,setstartDate] = useState('')
    const [endDate,setendDate] = useState('')

    function handlecompanyName(e){
        setcompanyName(e.target.value)
    }
    function handlePosition(e){
        setPosition(e.target.value)
    }
    function handlestartDate(e){
        setstartDate(e.target.value)
    }
    function handleendDate(e){
        setendDate(e.target.value)
    }
    function toggleView(){
        if(experienceView=='edit') {setView('submit')}
        else{setView('edit')}

    }
    if(experienceView=='edit'){
        return(
            <>
            <label htmlFor="experience-edit">Practical Experience:</label>
            <section className="position-edit">
                <Input label="Company name" value={companyName} onChange={handlecompanyName}/>
                <Input label="Position" value={position} onChange={handlePosition} />
                <Input label="Start Date" value={startDate} onChange={handlestartDate} type='date'/>
                <Input label="End Date" value={endDate} onChange={handleendDate} type='date'/>
                <button onClick={toggleView}>Submit</button>
            </section>
            </>
        )
    }else{
        return(
            <>
                <label htmlFor="experience-submit">Practical Experience:</label>
                <section class='experience-submit'>
                    <List label='Company name:' value={companyName}/>
                    <List label='Position:' value={position}/>
                    <List label='Start date:' value={startDate}/>
                    <List label='End date:' value={endDate}/>
                    <button onClick={toggleView}>Edit</button>
                </section>
            </>
        )
    }
    
}

function List({label,value}){
    return(
        <>
            <label htmlFor={label+'-submit'}>{label}</label>
            <div className='submit-field' id={label+'-submit'}>{value}</div>
        </>
    )
}
function Input({label,value="",onChange=null,type}){
    //console.log(Object.keys(props).length)
    return(
        <>
        <label htmlFor={label}>{label}</label>
        <input className='input-field' id={label.toLowerCase()} value={value} onChange={onChange} type={type}/>
        </>
    )
}

function Section(){
    return(
        <>
            <Section1/>
            <Section2/>
            <Section3/>
        </>
    )
    
}

export default Section