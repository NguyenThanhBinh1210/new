import { useEffect, useState } from "react";
import axios from "axios";
import RepComment from "./repComent";

interface CommentProps {
    datas: any; // Nên thay 'any' bằng kiểu dữ liệu cụ thể cho 'data' nếu bạn biết nó
  }
  const Comment: React.FC<CommentProps> = ({ datas }) => {
    const [isVisible, setIsVisible] = useState(false);

  const [reloadKey, setReloadKey] = useState(Date.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setReloadKey(Date.now()); // Cập nhật key để reload component
    }, 5000);

    return () => clearInterval(intervalId);
  }, [reloadKey, datas]);

  const date = new Date(datas.createdAt);
  const formattedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} lúc ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-fullxl mx-auto mt-4 ">
      <div className=" items-center mb-4 w-full">
        {/* <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div> */}

        <div className="comment">
          <div className="flex h-7">
            {" "}
            <div className="w-7 h-full rounded-full bg-blue-600 mr-3">
              {datas.img ? (
                <img src="{data.img}" />
              ) : (
                <div className="text-center text-gray-50">
                  {datas.email[0]?.toUpperCase()}
                </div>
              )}
            </div>
            <h4>{datas.email} | </h4>
            <p className="ml-2 text-base text-gray-500">{formattedDate}</p>
          </div>

          <p className="text-gray-700"> {datas.content}</p>
          <div className="mt-4 flex">
            <button className="text-blue-500 hover:underline"  onClick={() => setIsVisible(!isVisible)}>Trả lời</button>
            <div className="ml-2 w-6 h-6 rounded-full bg-blue-600 mr-3 text-center text-gray-50">
              {" "}
              ?
            </div>
          </div>
          
        </div>
        {isVisible &&
        <RepComment apiEndpoint={["https://api-kinhdoanh.onrender.com/api/v1/comment/replies", datas._id]}/>}
        <div className="ml-4">
          {datas.replies &&
            datas.replies.map((replys : any) => (
              <Comment key={replys.id} datas={replys} />
            ))}
        </div>
      </div>
    </div>
  );
};

function AllComent() {
  const [commentxs, setComments] = useState([]);
  const [reloadKey, setReloadKey] = useState(Date.now());

  console.log(commentxs);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-kinhdoanh.onrender.com/api/v1/comment/get-all-comment"   
        ); // Đường dẫn API lấy tất cả comments
        setComments(response.data.comments);
      } catch (error) {
        console.error("Lỗi khi tải comments:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(() => {
      setReloadKey(Date.now()); // Cập nhật key để reload component
    }, 5000);

    return () => clearInterval(intervalId);
  }, [reloadKey]);

  return (
    <div className="p-8">
      {commentxs.map((commentData : any) => (
        <div>
          <Comment key={commentData._id} datas={commentData} />
        </div>
      ))}
    </div>
  );
}

export default AllComent;
