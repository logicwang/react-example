// import logo from './logo.svg';
import { Rate,DatePicker } from 'antd';
import './App.css';

const data = [
  {  name: '王宇飞', website:  "https://baidu.com"},
  {  name: '王楚江', website:  "https://wangchujiang.com"},
  {  name: '王劫', website:  "https://wangchujiang.com"},
]

function onChange(date, dateString) {
  console.log(date, dateString);
}
function App() {
  return (
    <div>
      <a href="https://baidu.com">王宇飞1</a>
      {data.map((item, idx) => {
        return (
          <a key={idx} href={item.website}>{item.name}</a>
        )
      })}
      <Rate />
      <br  />
      <DatePicker onChange={onChange} />
    </div>
  );
}

export default App;
