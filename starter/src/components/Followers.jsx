import axios from "axios";
import React, { useEffect, useState } from "react";

const Followers = () => {
  const [following, setFollowing] = useState([]);
  const getfollowers = JSON.parse(localStorage.getItem("followers"));
  const user = JSON.parse(sessionStorage.getItem("userlogin"));

  const url = `https://api.github.com/users/${user}/following`;

  const getFollowing = async () => {
    try {
      const { data } = await axios(url);
      setFollowing(data);

      console.log(data);
    } catch (error) {
      console.log("İkaz!!!");
    }
  };

  useEffect(() => {
    getFollowing();
  }, []);

  return (
    <>
      {getfollowers.map((item2) => item2.id)}

      <div className="main">
        {following
          .filter((item) => item.id !== getfollowers.map((item2) => item2.id))
          .map((item) => {
            return (
              <div className="card">
                <img src={item?.avatar_url} alt="" />
                <h4>{item?.login}</h4>

                <a href={item?.html_url} target="_blank">
                  <button>Gel Gör Beni</button>
                </a>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Followers;
