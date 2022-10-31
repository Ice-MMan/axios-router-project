import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [followers, setFollowers] = useState([]);

  const url = `https://api.github.com/users/Ice-MMan/followers?per_page=100`;

  const getFollowers = async () => {
    try {
      const { data } = await axios(url);
      setFollowers(data);
      console.log(data);
    } catch (error) {
      console.log("İkaz!!!");
    }
  };

  useEffect(() => {
    getFollowers();
  }, []);

  console.log(followers);

  return (
    <div className="main">
      {followers &&
        followers.map((item) => {
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
  );
};

export default Home;
