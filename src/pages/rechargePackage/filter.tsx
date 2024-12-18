import { Button, Form, Input } from 'antd';
import Card from '@/components/card';

const Filter = ({
  onSearch,
  onReset,
}: {
  onSearch?: (values: { phone: string }) => void;
  onReset?: () => void;
}) => {
  const [form] = Form.useForm();
  return (
    <Card>
      <Form form={form} layout="horizontal">
        <div className="flex items-start justify-between">
          <Form.Item label="套餐名称" name="name" className={'mb-0'}>
            <Input placeholder="请输入" />
          </Form.Item>
          <div className="flex gap-[20px]">
            <Button
              onClick={() => {
                onReset?.();
                form.resetFields();
              }}
            >
              重置
            </Button>
            <Button
              type="primary"
              onClick={() => {
                onSearch?.(form.getFieldsValue());
              }}
            >
              搜索
            </Button>
          </div>
        </div>
      </Form>
    </Card>
  );
};

export default Filter;
