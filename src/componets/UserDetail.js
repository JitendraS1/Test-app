// import { useState, useEffect } from 'react'
// import axios from 'axios';
import React, { useState } from 'react'
import { Progress, Placeholder } from 'semantic-ui-react'
import axios from 'axios';
import { useSelector } from 'react-redux';


const client = axios.create();

function UserDetail(props) {

    const [downloadProgress, setDownloadProgress] = useState(0);
    const [showProgressBar, setShowProgressBar] = useState(false);
    const users = useSelector((state) => {
        console.log('state', state);
        return state.detail.data;
    })
    // const [userData, setUserData] = useState([])

    // useEffect(() => {

    //     axios.get(`https://63d0c1bc3f08e4a8ff89b455.mockapi.io/react-test`)
    //         .then((getData) => {
    //             console.log(getData.data)
    //             setUserData(getData.data)
    //         })
    async function downloadFile() {
        setShowProgressBar(true);
        let result = await client.get('/doc.xls', {
            onDownloadProgress: progressEvent => {
                console.log(progressEvent.progress);

                setDownloadProgress(progressEvent.progress.toFixed(2) * 100);
            }
        })
            .then(res => {
                setDownloadProgress(100);
                setTimeout(() => setShowProgressBar(false), 2000);
                // console.log("All DONE: ", res.data)
                const blob = new Blob([res.data], { type: res.headers['content-type'], encoding: 'UTF-8' })
                const href = URL.createObjectURL(blob);


                // create "a" HTML element with href to file & click
                const link = document.createElement('a');
                link.href = href;
                link.setAttribute('download', 'file.xls'); //or any other extension
                document.body.appendChild(link);
                link.click();

                // clean up "a" element & remove ObjectURL
                document.body.removeChild(link);
                URL.revokeObjectURL(href);
                return res.data
            }).catch(err => {
                setShowProgressBar(false);
            });

    }



    // }, []);
    return (
        <>
            {(users && users.length === 0) ? <Placeholder className='placeholder-detail'>
                <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Paragraph>
            </Placeholder> : <div className="user-detail-card">

                <div className="detail-card">
                    <span> <b>Customer Name</b>:  {users[props.selectedIndex].Name}  </span> <br />
                    <span> <b>Enail</b> : {users[props.selectedIndex].Email}   </span> <br />
                    <span> <b>Pbhone</b> :  {users[props.selectedIndex].Phone}  </span> <br />
                    <span> <b>Country</b> : {users[props.selectedIndex].Country}</span> <br />
                    <span> <b>Additional-Info</b> : {users[props.selectedIndex].information}</span><br />


                    <pre></pre>





                    <button className='download' onClick={() => downloadFile()}>Download</button>
                    {showProgressBar ? <Progress success={downloadProgress === 100} percent={downloadProgress} active={downloadProgress !== 100} className='mt-2 progress-bar' progress /> : null}


                </div>


            </div>}
        </>
    )
}

export default UserDetail
