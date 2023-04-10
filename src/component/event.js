import { Outlet } from "react-router-dom";
const Event = () => {
  return (
    <div className="container">
      <h4>오늘의 이벤트</h4>
      {/* Outlet으로 하위 컴포넌트의 위치를 잡아준다 */}
      <Outlet></Outlet>
    </div>
  );
};

export default Event;
