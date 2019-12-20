import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    // One component inside of another
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Brad"
          timeAgo="xxx"
          textComment="zzz"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="July"
          timeAgo="xxx"
          textComment="zzz"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Francis"
          timeAgo="xxx"
          textComment="zzz"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
