
import { Container, Dropdown } from 'semantic-ui-react'
import { Table } from '../components'
import { useState, useEffect } from 'react';
import axios from '../api'

const Home = () => {
    const [dataSS, setDataSS] = useState([]);
    const [loading, setLoading] = useState(false);
    const [listSubjects, setListSubjects] = useState([]);
    const getData = (where = {}) => {
        setLoading(true);
        axios.post('/studentSubjects/getstudentSubjects', {
            ...where
        }).then(({ data }) => {
            setDataSS(data?.studentSubjects || []);
            setLoading(false);
        }).catch(console.error)
    }

    const getListSubjects = () => {
        setLoading(true);
        axios.post('/subjects/getSubjects').then(({ data }) => {
            setLoading(false);
            const list = data?.Subjects.map(value => ({
                key: value.id,
                text: `${value.nombre} - CREDITOS: ${value.creditos} - ${value.codigo}`,
                value: value.id,
            })) || [];
            setListSubjects(list)
        }).catch(console.error)
    }
    const columns = [
        {
            header: 'Nombre del Estudiante',
            accessor: 'estudiante.nombre'
        },
        {
            header: 'Materia',
            accessor: 'materias.nombre'
        },
    ];
    useEffect(() => {
        getData();
        getListSubjects();
    }, [])

    const hendelMaterias = (e,v) => { 
        if (typeof v.value ==='number') {
            getData({id_materia:v.value})
        }else {
            getData()
        }
    }

    return (
        <Container>
            <br />
            <div className='row'>
                <Dropdown
                    placeholder='SELECIONE LA MATERIA' 
                    clearable
                    selection
                    loading={loading}
                    options={listSubjects}
                    onChange={hendelMaterias}
                />
            </div>
            <br />
            <Table columns={columns} data={dataSS} />
        </Container>
    )
}

export default Home
