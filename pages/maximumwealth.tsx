import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css'

interface DataType {
    key: string;
    name: string;
    bank1: number;
    bank2: number;
    bank3: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Bank 1',
        dataIndex: 'bank1',
        key: 'bank1',
    },
    {
        title: 'Bank 2',
        dataIndex: 'bank2',
        key: 'bank2',
    },
    {
        title: 'Bank 3',
        dataIndex: 'bank3',
        key: 'bank3',
    },
    
];

const data: DataType[] = [
    {
      key: '1',
      name: 'John',
      bank1: 3000,
      bank2: 65000,
      bank3: 2566,
    },
    {
      key: '2',
      name: 'Jim',
      bank1: 7000,
      bank2: 2500,
      bank3: 35000,
    },
    {
      key: '3',
      name: 'Joe',
      bank1: 6000,
      bank2: 50000,
      bank3: 6500,
    },
  ];

function MaximumWealth(){
    const [wealth, setWealth] = useState<number>(0);
    const [richest, setRichest] = useState<string>();

    useEffect(()=>{
        calculateWealth();
    },[richest])

    const calculateWealth = async () =>{
        await data.map((rich) =>{
            const allwealth = rich.bank1 + rich.bank2 + rich.bank3
            if(allwealth > wealth){
                setWealth(allwealth);
                setRichest(rich.name);
            }
        })
    }

    return(
        <div className={styles.container}>
            <Table pagination={false} columns={columns} dataSource={data} />
            <span>{richest} is the richest that has {wealth} wealth</span>
        </div>
    )
}

export default MaximumWealth