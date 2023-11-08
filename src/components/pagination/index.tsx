import { Pagination, Space, Table, Tag } from "antd";
import React, { useState, useMemo } from "react";
import "./style.css";
import {
  VerticalRightOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  VerticalLeftOutlined,
} from "@ant-design/icons";
import { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John 1",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim 2",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe 3",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Joe 4",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "5",
    name: "Joe 5",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function PaginationPage() {
  const [current, setCurrent] = useState<number>(1);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Table
        pagination={{
          total: 5,
          pageSize: 1,
          current: current,
          showSizeChanger: false,
          onChange: (page: number) => setCurrent(page),
          showTotal: (total, range) => {
            return (
              <>
                <VerticalRightOutlined
                  onClick={() => setCurrent(1)}
                  className="arrow"
                />
                <ArrowLeftOutlined
                  onClick={() => setCurrent(current - 1)}
                  className="arrow"
                />
                <span>
                  Seite {current} von {Math.ceil(85 / 10)}
                </span>
                <ArrowRightOutlined
                  onClick={() => setCurrent(current + 1)}
                  className="arrow"
                />
                <VerticalLeftOutlined
                  onClick={() => setCurrent(5)}
                  className="arrow"
                />
              </>
            );
          },
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default PaginationPage;
