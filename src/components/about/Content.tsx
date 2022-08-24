// import third-party modules
import { Descriptions } from 'antd';
import React from 'react';

import { useGetVersionQuery } from '@/api/version';

function Content() {
  const { data, error, isLoading } = useGetVersionQuery({});

  return (
    <Descriptions
      column={1}
      bordered
    >
      <Descriptions.Item label='Version'>
        {error
          ? <>Err</>
          : isLoading
          ? <>Loading...</>
          : data?.data.version}
      </Descriptions.Item>
    </Descriptions>
  );
}

export default Content;
