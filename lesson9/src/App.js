import "./App.css";
import { Select, Space } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;
function App() {
  return (
    <div className="App" style={{ backgroundColor: "red" }}>
      <h1>Hamiya salam</h1>
      <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      // onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
     <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </div>
  );
}

export default App;
