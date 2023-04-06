import React, { useState, useRef } from 'react'
import { Form, Button } from "semantic-ui-react"
import axios from 'axios';
// import { Dropdown } from 'semantic-ui-react'
import CountryDropdown from './Country'


export default function Login() {

    const fileInputRef = useRef();
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Country, setCountry] = useState('');
    const [information, setInformation] = useState('');
    const [fileName, setFileName] = useState('');
    console.log(Name)
    console.log(Email)

    const sendDataToApi = () => {
        axios.post(`https://63d0c1bc3f08e4a8ff89b455.mockapi.io/react-test`, {
            Name,
            Email,
            Phone,
            Country,
            information

        })
    }

    const onFileChange = (event) => {
        console.log('files', event.currentTarget.files);
        if (event.currentTarget.files.length > 0) {

            if (event.currentTarget.files[0].size < 15 * 1024 * 1024) {
                // alert('size less than 15');
                // return;
            }
            // Greateer than 50 MB
            if (event.currentTarget.files[0].size > 50 * 1024 * 1024) {
                // alert('size more than 50');
                // return;
            }
            setFileName(event.currentTarget.files[0].name);
        }

    };

    return (
        <div className='form-wrapper'>
            <Form>
                <h2>User Form</h2> <br />

                <Form.Field>
                    <label> Name</label>
                    <input name='name' onChange={(e) => setName(e.target.value)} placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input name='email' onChange={(e) => setEmail(e.target.value)} placeholder='jitendra@.com' />
                </Form.Field>
                <Form.Field>
                    <label>Phone</label>
                    <input name='Number' type='number' onChange={(e) => setPhone(e.target.value)} placeholder='Enter Your Number' />
                </Form.Field>
                <Form.Field>
                    <label>Country </label>
                    {/* <input name='Country' onChange={(e) => setCountry(e.target.value)} placeholder='Your Country Name' /> */}
                    {/* <Country /> */}
                    <CountryDropdown setCountry={setCountry} />
                </Form.Field>
                <Form.Field>
                    <label> Additional-Info </label>
                    <input name='information' onChange={(e) => setInformation(e.target.value)} placeholder='Write a short Bio' />
                </Form.Field>
                <Form.Field>
                    <label> Upload PDF </label>
                    <Button
                        content={fileName.length > 0 ? fileName : 'Choose File'}
                        labelPosition="left"
                        icon="file"
                        onClick={() => fileInputRef.current.click()}
                    />
                    <input
                        accept=".pdf"
                        ref={fileInputRef}
                        type="file"
                        hidden
                        onChange={onFileChange}
                    />
                </Form.Field>

                <Button type='submit' onClick={sendDataToApi}>Submit</Button>
            </Form>

        </div>
    )
}
