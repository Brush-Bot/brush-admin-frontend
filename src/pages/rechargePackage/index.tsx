import React from 'react';
import usePromotion from '@/pages/rechargePackage/usePromotion.ts';
import Filter from '@/pages/rechargePackage/filter.tsx';
import Card from '@/components/card';
import { Button, Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { PromotionItem } from '@/services/promotion.ts';
import { formatDateAndTime } from '@/utils';
import { PlusOutlined } from '@ant-design/icons';

const color = {
  CODE: 'magenta',
  POINT: 'geekblue',
};

export const columns: ColumnsType<PromotionItem> = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 160,
    ellipsis: true,
  },
  {
    title: '名称',
    dataIndex: 'name',
    width: 160,
    ellipsis: true,
  },
  {
    title: '描述',
    dataIndex: 'description',
    width: 200,
    ellipsis: true,
  },
  {
    title: '数量',
    dataIndex: 'amount',
    width: 120,
  },
  {
    title: '价格',
    dataIndex: 'price',
    width: 120,
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: 120,
    render: (_, record) => (
      <Tag color={color[record.type]} key={record.type}>
        {record.type.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    width: 160,
    render: (_, record) => <span>{formatDateAndTime(record.createdAt)}</span>,
  },
  {
    title: '更新时间',
    dataIndex: 'updatedAt',
    width: 160,
    render: (_, record) => <span>{formatDateAndTime(record.updatedAt)}</span>,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 200,
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: 120,
    fixed: 'right',
    render: () => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];

const RechargeManagement: React.FC = () => {
  const { promotionList, getPromotionListLoading } = usePromotion();
  return (
    <div className={'flex flex-col gap-[20px]'}>
      <Filter />
      <Card className={'flex flex-col gap-[16px]'}>
        <div>
          <Button type="primary" icon={<PlusOutlined />}>
            新建
          </Button>
        </div>
        <Table
          dataSource={promotionList?.data}
          columns={columns}
          loading={getPromotionListLoading}
          scroll={{
            y: 1000,
          }}
        />
      </Card>
    </div>
  );
};

export default RechargeManagement;
