import {useState } from 'react';
import './App.css';

export default function RegisterForm(){
    const [form, setForm] = useState({
        firstName: 'Alexander',
        lastName: 'Hanch Bjerke',
        email: 'alexanderhbjerke@gmail.com',
    });

    return(
        <div>
            <form>
                <label>First Name: </label>
                <input value={form.firstName} 
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        })
                    }}
                />
                <br />
                <label>Last Name: </label>
                <input value={form.lastName} 
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        })
                    }}
                />
                <br />
                <label>Email: </label>
                <input value={form.email} 
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }}
                />
            </form>
        

        </div>
    )

    
}