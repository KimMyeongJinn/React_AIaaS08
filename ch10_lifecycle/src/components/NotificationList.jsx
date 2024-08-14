import React, { Component } from "react";
import Notification from "./Notification";

// BackEnd REST API Server로부터 json 알람 데이터를 수신했다고 가정한다.
const reservedNotifications = [
  {
    id: 1,
    message: "안녕하세요. 오늘 일정을 알려드립니다.",
  },
  {
    id: 2,
    message: "점심 식사시간입니다.",
  },
  {
    id: 3,
    message: "이제 곧 미팅이 시작됩니다.",
  },
];

class NotificationList extends Component {
  constructor(props) {
    super(props);

    this.timer = null;

    this.state = {
      notifications: [],
    };
  }

  // Mount가 완료되는 시점, 주로 동작을 초기화할 때 많이 사용한다.
  componentDidMount() {
    const { notifications } = this.state;

    /* 1초 주기로 타이머 호출
    reservedNotifications 객체를 하나씩 notifications에 저장
    모두 저장되면 타이머 종료
     */
    this.timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(this.timer);
        this.timer = null;
      }
    }, 1000);
  }

  // Unmount될 때 호출(종료 시점)
  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
