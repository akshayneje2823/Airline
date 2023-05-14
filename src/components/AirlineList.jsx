import React from 'react';
import DataTable from 'react-data-table-component'
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRecord, updatedRecord } from '../redux/AirlineSlice';


function AirlineList({tableData, setSelectedAirLine}) {

    console.log(tableData.sort((a,b)=>(a.name > b.name ? 1 : b.name > a.name ? -1 :0)))


    const dispatch = useDispatch()
    const navigate = useNavigate();



    // const getAirlineData = async () => {
    //     const res = await axios.get('https://api.instantwebtools.net/v1/airlines');
    //     console.log(res.data)
    // }

    const columns = [
        {
            name: "Name",
            selector: row => row.name,
            width: "col col-lg-1",
            center: true
        },
        {
            name: "Country",
            selector: row => row.country,
            width: "col col-lg-1",
            center: true
        },
        {
            name: "Logo",
            selector: row => <img src={row.logo} alt="img" height={50} width={50} />,
            width: "col col-lg-1",
            center: true

        },
        {
            name: "Slogan",
            selector: row => row.slogan,
            width: "col col-lg-1",
            center: true
        },
        {
            name: "Head Quaters",
            selector: row => row.head_quaters,
            width: "col col-lg-1",
            center: true
        },
        {
            name: "Website",
            selector: row => row.website,
            width: "col col-lg-1",
            center: true
        },
        {
            name: "Established",
            selector: row => row.established,
            width: "col col-lg-1",
            center: true
        },
        {
            name: "Actions",
            cell: row => (
                <>
                    <button className='btn btn-default btn-sm m-2' onClick={() => updateAirlineHAndler(row)}><RemoveRedEyeIcon /></button>
                    <button className='btn btn-default btn-sm m-2' onClick={() => deletedRecord(row)}><DeleteIcon /></button>
                </>
            ),
            width: "col col-lg-1",
            center: true
        }
    ];

    // update Record
    const updateAirlineHAndler = (currentRecord) => {
        console.log(currentRecord);
        setSelectedAirLine(currentRecord)
        navigate(`/update-record/${currentRecord.id}`)
    }


    // Delete Record
    const deletedRecord = (currentRecord) => {
        dispatch(deleteRecord(currentRecord))
    }

    return (
        <Container className='mt-3'>
            <div className='text-end'><Link to='/add' className='btn btn-success'>Add Record</Link></div>
            <DataTable
                columns={columns}
                data={tableData}
                fixedHeader
                pagination
            />
        </Container>
    )
}

export default AirlineList