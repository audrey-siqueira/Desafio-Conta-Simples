import React, { useEffect, useState, useMemo} from 'react';
import { Container } from 'reactstrap';
import TableContainer from './TableContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SelectColumnFilter } from './filters';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'



const N=1

const Transferencias= ()=>  {

  
  const [data1, setData1] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const response1 = await fetch('./mocks_empresas.json')
      const body1 = await response1.json();
      console.log(body1);
      setData1(body1.filter(({empresaId}) => empresaId===N));
      
    };
    doFetch();
  }, []);


      
  


const [data2, setData2] = useState([]);
useEffect(() => {
  const doFetch = async () => {
    const response2 = await fetch('./mocks_transacoes.json');
    const body2 = await response2.json();
    console.log(body2);
    setData2(body2.filter(({empresaId}) => empresaId===N));
  };
  doFetch();
}, []);






const columns = useMemo(
() => [
  {
    Header: 'ID da Empresa',
    accessor: 'empresaId',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'equals',
  },
  {
    Header: 'Data da Transação',
    accessor: 'dataTransacao',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'equals',
  },
  {
    Header: 'Valor (R$)',
    accessor: 'valor',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'equals',
    
    
  },
  {
    Header: '4 Últimos Dígitos do Cartão',
    accessor: 'finalCartao',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'equals',
  },
  {
    Header: 'Tipo',
    accessor: 'tipoTransacao',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'equals',
  },
  {
    Header: 'Descrição',
    accessor: 'descricaoTransacao',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'equals',
  },
  {
    Header: 'Estabelecimento',
    accessor: 'estabelecimento',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'equals',
  },
  {
    Header: 'Flag',
    accessor: 'credito',
    disableSortBy: true,
    Filter: SelectColumnFilter,
    filter: 'equals',
  },
],
[]
);


return (

<Container style={{ marginTop: 5 }}>
{data1.map( (data1) => (
        
        <Card  style={{ width: '61rem' }}>
          

              <Card.Header className="text-center"><h2><b>Dados Bancários do Cliente</b></h2>  </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item><b>ID da Empresa:</b>__{data1.empresaId}_____<b>Nome da Empresa:</b>__{data1.nomeEmpresa}_____<b>CNPJ:</b>__{data1.cnpj}</ListGroup.Item>
                <ListGroup.Item><b>Banco:</b>__{data1.dadosBancario.banco}_____<b>Nome do Banco:</b>__{data1.dadosBancario.bancoNome}_____<b>Agência:</b>__{data1.dadosBancario.agencia}_____<b>Conta:</b>__{data1.dadosBancario.conta}_____<b>Dígito:</b>__{data1.dadosBancario.digitoConta}    </ListGroup.Item>

               <ListGroup.Item><h4><b>Saldo:</b> R$ {data1.saldo}</h4></ListGroup.Item>
 
              </ListGroup>
        </Card>
     )) }
  <TableContainer columns={columns} data={data2} />
</Container>

);
}

export default Transferencias;